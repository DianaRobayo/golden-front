import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../../services/apiService.service';
import { Table } from './Table';
import { FaEdit } from "react-icons/fa";
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';

export const CrudCategories = () => {

  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(0);
  const [editedCategory, setEditedCategory] = useState({});
  const [isEditing, setIsEditing] = useState(false);

  const columns = [
    { header: 'Id', accessorKey: 'id_category' },
    { header: 'Categoría', accessorKey: 'category_name' },
    {
      header: 'Editar', accessorKey: '', cell: (value) => (
        <button className="btn btn-success" data-bs-toggle="modal"
          data-bs-target="#editModal" onClick={
            () =>  {
              const id = value.row.original.id_category;
              console.log('id', id);
              setEditingId(id);
              // Activamos el estado de edición
              setIsEditing(true);

              const categoryToEdit = categories.find(obj => obj.id_category === id);
              console.log('cate', categoryToEdit)
              // Establecemos los datos de la persona a editar
              setEditedCategory({ ...categoryToEdit });

            }}>
          <FaEdit />
        </button>
      )
    }
  ];

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await getAllCategories();
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

  /* Metodo para guardar */
  const handleSave = (e) => {
    setCategories(categories.map(category => category.id_category === editingId ? editedCategory : category));
    setEditingId(null);
    setEditedCategory({ category_name: '' });
    setIsEditing(false);
  }

  /* Metodo para eliminar */
  const handleDelete = (id) => {
    // setDeleteId(id);
    /* Sin modal se usa lo de abajo */
    // const updatedPersons = persons.filter(obj => obj.id !== id);
    // setPersons(updatedPersons);
  }

  const handleCreate = () => {
    setCategories([...categories, { id: categories.length + 1, ...editedCategory }]);
    setEditedCategory({ category_name: '' });
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

      <div className='container'>
        <h2>Categorías de la aplicación</h2>
        <Table data={categories} columns={columns} name={'Categoría'} create={handleCreate} />

        {/* Modal */}
        <div id="editModal" className='modal fade' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title'>Categoría</h3>
                <button type='button' className='btn-close' data-bs-dismiss="modal"
                  aria-label='close' >
                </button>
              </div>
              <div className='modal-body'>
                <label className="form-label required">Nombre de la categoría </label>
                <input type="text" className='form-control' name="category_name"
                  value={editedCategory.category_name || ''}
                  onChange={handleChange}  required/>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary'
                  data-bs-dismiss="modal" >
                  Cancelar
                </button>
                <button type='button' className='btn btn-success' onClick={handleSave}
                  data-bs-dismiss="modal" >
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>        
      </div>

      <Footer />
    </div>
  )
}
