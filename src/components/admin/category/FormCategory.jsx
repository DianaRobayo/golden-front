import React, { useEffect, useState } from 'react'
import { createCategoryService, editCategoryService, fetchCategoryService, getAllCategoriesService } from '../../../services/apiService.service';
import { useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

export const FormCategory = () => {

  const { action, id } = useParams();
  const [categories, setCategories] = useState(null);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();   // Hook para redirigir

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

  useEffect(() => {
    const getDetailCategory = async () => {
      try {
        if (id) {
          setEditingId(Number(id));
          setIsEditing(true);
          const res = await fetchCategoryService(id);
          if (res) {
            setCategory(res);
          }
        } else {
          setCategory({
            category_name: ''
          });
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDetailCategory();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (action === 'edit') {
      handleEditSave();
    } else {
      handleCreateSave();
    }
  };

  /* Detecta cambios de la categoria */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCategory(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  /* Metodo para guardar al momento de editar */
  const handleEditSave = (e) => {
    setEditingId(null);
    setIsEditing(false);

    // Servicio de editar
    editCategoryService(editingId, category).then((res) => {
      if (res) {
        Swal.fire({
          title: 'Categoría editada correctamente!',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir
          navigate('/crud-categorias');
        });
      }

    }, (error) => {
      console.log('error', error)
      Swal.fire({
        title: 'Error al editar la categoría ' + error,
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    });
  }

  /* Metodo que guarda y crea la categoria */
  const handleCreateSave = () => {
    categories.id_category = categories.length + 1;
    setCategories(category);

    // Servicio de crear
    createCategoryService(category).then((res) => {
      if (res) {
        Swal.fire({
          title: '¡Categoría creada correctamente!',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir
          navigate('/crud-categorias');
        });
      }
    }, (error) => {
      console.log('error', error)
      Swal.fire({
        title: 'Error al crear la categoría ' + error,
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    });
  }

  const cancelDelete = () => {
    navigate('/crud-categorias');
  }

  if (!category) {
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
      <div className='container'>
        <h2 className='mb-4 mt-4'>
          {action === 'edit' ? 'Editar categoría' : 'Crear categoría'}
        </h2>
        <div className='card mt-4'>
          <form className='m-4' onSubmit={handleSubmit}>
            <div className="row justify-content-center">
              <div className="col-12 col-sm-8">
                <label className="form-label required">Nombre de la categoría </label>
                <input type="text" className='form-control' onChange={handleChange} name="category_name"
                  value={category.category_name || ''} required />
              </div>
            </div>

            <div className='row justify-content-center mt-4'>
              <div className="col-6 col-sm-4">
                <button type='button' className='btn btn-secondary'
                  onClick={cancelDelete}>
                  Regresar
                </button>
              </div>
              <div className="col-6 col-sm-4">
                <button type="submit" className='btn btn-success'>
                  {action === 'edit' ? 'Editar' : 'Agregar'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
