import React, { useEffect, useState } from 'react'
import { getAllCategoriesService, createCategoryService, editCategoryService, deleteCategoryService } from '../../../services/apiService.service';
import { Table } from '../Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Navbar } from '../../Navbar';
import { Footer } from '../../Footer';
import { ModalCategory } from './ModalCategory';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CrudCategories = () => {

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(0);
  const [editedCategory, setEditedCategory] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useNavigate();   // Hook para redirigir

  const columns = [
    { header: 'Id', accessorKey: 'id_category' },
    { header: 'Categoría', accessorKey: 'category_name' },
    {
      header: 'Editar', accessorKey: '', cell: (value) => (
        <button className="btn btn-success" onClick={
            () => {
              const id = value.row.original.id_category;
              navigate(`/form-categorias/edit/${id}`);  
            }}>
          <FaEdit />
        </button>
      )
    },
    {
      header: 'Eliminar', accessorKey: '', cell: (value) => (
        <button className="btn btn-danger" onClick={
            () => {
              const id = value.row.original.id_category;
              const name = value.row.original.category_name;
              handleDeleteCategory(id, name, value.row.original);
            }}>
          <MdDelete />
        </button>
      )
    }
  ];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await getAllCategoriesService();
        if (res) {
          setCategories(res);
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  /* Detecta cambios de la categoria */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  /* Metodo para guardar al momento de editar */
  const handleSave = (e) => {
    setCategories(categories.map(category => category.id_category === editingId ? editedCategory : category));
    setEditingId(null);
    setEditedCategory({ category_name: '' });
    setIsEditing(false);

    // Servicio de editar
    editCategoryService(editingId, editedCategory).then((res) => {
      if (res) {
        Swal.fire({
          title: '¡Producto editado correctamente!',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir después de cerrar el modal
          navigate('/crud-categorias');
        });
      }
     
    }, (error) => {
      console.log('error', error)
    });
  }

  const setTitleCreate = () => {
    setTitleModal('Crear categoría');
  }

  /* Metodo que guarda y crea la categoria */
  const handleCreate = () => {
    setCategories([...categories, { id_category: categories.length + 1, ...editedCategory }]);
    setEditedCategory({ category_name: '' });

    // Servicio de crear
    createCategoryService(editedCategory).then((res) => {
      if (res) {
        Swal.fire({
          title: '¡Producto creado correctamente!',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir después de cerrar el modal
          window.location.reload();
        });
      }   
    }, (error) => {
      console.log('error', error)
    });
  }

  const cancelDelete = () => {
    setEditingId(null);
    setDeleteId(null);
  }

  /* Metodo para eliminar el registro de la categoria */
  const handleDeleteCategory = (id, name, data) => {
    deleteCategoryService(id, data).then((res) => {
      if (res.message) {
        Swal.fire({
          title: 'Error al eliminar la categoría ' + res.message,
          icon: 'error',
          confirmButtonText: 'Intentar nuevamente',
        });
      } else {
        Swal.fire({
          title: 'Se ha eliminado la categoría ' + name,
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          window.location.reload();
        });
      }

    }, (error) => {
      Swal.fire({
        title: 'Error al eliminar la categoría ', error,
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    });
  }

  if (!categories) {
    return <div>La categoría no se encuentra</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div>
      <Navbar />

      <div className='container mt-5'>
        <h2>Categorías de la aplicación</h2>
        <Table data={categories} columns={columns} name={'Categoría'}
          titleModal={titleModal} setTitle={setTitleCreate} />

        {/* Modal */}
        <div id="editModal" className='modal fade' tabIndex='-1'>
          <ModalCategory titleModal={titleModal} handleChange={handleChange}
            editedCategory={editedCategory} handleSave={handleSave} isEditing={isEditing}
            cancelDelete={cancelDelete} handleCreate={handleCreate} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
