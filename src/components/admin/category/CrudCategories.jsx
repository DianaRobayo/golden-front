import React, { useEffect, useState } from 'react'
import { getAllCategoriesService, createCategoryService, editCategoryService, deleteCategoryService } from '../../../services/apiService.service';
import { Table } from '../Table';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Navbar } from '../../Navbar';
import { Footer } from '../../Footer';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export const CrudCategories = () => {

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(0);
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

  const setTitleCreate = () => {
    setTitleModal('Crear categoría');
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
        title: 'Error al eliminar la categoría ' + error,
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
      </div>

      <Footer />
    </div>
  )
}
