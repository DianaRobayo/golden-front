import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { createProductService, editProductService, fetchProductService, getAllCategoriesService, getAllProductService } from '../../../services/apiService.service';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


export const FormProduct = () => {
  const { action, id } = useParams();
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState([]);
  const [editingId, setEditingId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();   // Hook para redirigir

  /* Productos */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await getAllProductService();
        if (res) {
          setProducts(res);
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  /* Producto por id */
  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        if (id) {
          setEditingId(Number(id));
          setIsEditing(true);
          const res = await fetchProductService(id);
          if (res) {
            res.privilege === true ? res.privilege = 1 : res.privilege = 0;
            setProduct(res);
          }
        } else {
          setProduct({
            product_name: '',
            description: '',
            material: '',
            url_image: '',
            price: '0',
            privilege: 0,
            id_category: '',
            categoryIdCategory: '',
            category: []
          });
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDetailProduct();
  }, [id]);

  /* Categorias */
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


  const handleSubmit = (event) => {
    event.preventDefault();
    if (action === 'edit') {
      handleEditSave();
    } else {
      handleCreateSave();
    }
  };

  /* Detecta cambios del producto */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  /* Detecta cambios del checkbox */
  const handleChangeCheck = (e) => {
    let privilege = 0;
    if (e.target.checked) {
      privilege = 1;
    }
    setProduct(prevState => ({
      ...prevState,
      privilege: privilege
    }));
  }

  /* Detecta cambios en la carga de archivo */
  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      setProduct(prevState => ({
        ...prevState,
        url_image: 'http://localhost:3001/' + e.target.files[0].name
      }));
    }
  };

  const handleEditSave = () => {
    setEditingId(null);
    setIsEditing(false);

    // // Se crea objeto de producto incluyendo la imagen
    const formData = new FormData();
    formData.append('file', file);
    formData.append('product_name', product.product_name ? product.product_name : '');
    formData.append('description', product.description ? product.description : '');
    formData.append('material', product.material ? product.material : '');
    formData.append('url_image', product.url_image);
    formData.append('price', product.price ? product.price : '0');
    formData.append('privilege', product.privilege);
    formData.append('id_category', product.id_category ? product.id_category : 1);
    formData.append('categoryIdCategory', product.id_category ? product.id_category : 1);

    //Servicio de editar
    editProductService(editingId, formData).then((res) => {
      if (res) {
        Swal.fire({
          title: '¡Producto editado correctamente!',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir después de cerrar el modal
          navigate('/crud-productos');
        });
      }

    }, (error) => {
      console.log('error', error)
      Swal.fire({
        title: 'Error al editar el producto ', error,
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    });
  }

  /* Metodo para guardar y crear un producto */
  const handleCreateSave = () => {
    product.id_product = products.length + 1;
    setProduct(product);

    // Se crea objeto de producto incluyendo la imagen
    const formData = new FormData();
    formData.append('file', file);
    formData.append('product_name', product.product_name);
    formData.append('description', product.description);
    formData.append('material', product.material);
    formData.append('url_image', product.url_image);
    formData.append('price', product.price);
    formData.append('privilege', product.privilege);
    formData.append('id_category', product.id_category);
    formData.append('categoryIdCategory', product.id_category);

    // Servicio de crear
    createProductService(formData).then((res) => {
      if (res) {
        Swal.fire({
          title: '¡Producto creado correctamente!',
          icon: 'success',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir después de cerrar el modal
          navigate('/crud-productos');
        });
      }

    }, (error) => {
      console.log('error', error)
      Swal.fire({
        title: 'Error al crear el producto ', error,
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    });
  }

  const cancelDelete = () => {
    navigate('/crud-productos');
  }

  if (!product) {
    return <div>El producto no se encuentra</div>;
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
      <div className='container'>
        <h2 className='mb-4 mt-4'>
          {action === 'edit' ? 'Editar producto' : 'Crear producto'}
        </h2>
        {/* <img src={product.url_image} className="img-fluid rounded-start" alt="totoro" /> */}
        <div className='card mt-4'>
          <form className='m-4' onSubmit={handleSubmit}>
            <div className="row row-cols-3 p-2">
              <div className="col-6 col-sm-6">
                <label className="form-label required">Nombre del producto </label>
                <input type="text" className='form-control' name="product_name"
                  value={product.product_name || ''} onChange={handleChange} required />
              </div>

              <div className="col-6 col-sm-6">
                <label className="form-label required">Categoría </label>
                <div>
                  <select name="id_category" id="category" className='form-control' defaultValue={1}
                    onChange={handleChange}>
                    {
                      categories.map((data, index) => (
                        <option value={data.id_category} key={data.id_category}>
                          {data.category_name}
                        </option>
                      ))
                    }
                  </select>
                </div>
              </div>

              <div className="col-6 col-sm-6">
                <label className="form-label">Materiales </label>
                <textarea rows="2" className="form-control" name="material"
                  value={product.material || ''} onChange={handleChange}>
                </textarea>
              </div>

              <div className="col-6 col-sm-6">
                <label className="col-form-label">Descripción </label>
                <textarea rows="2" className="form-control" name="description"
                  value={product.description || ''} onChange={handleChange} required>
                </textarea>
              </div>

              <div className="col-6 col-sm-6">
                <label className="form-label required">Precio $</label>
                <input type="text" className='form-control' name="price"
                  value={product.price || '0'} onChange={handleChange} required />
              </div>

              <div className="col-6 col-sm-6">
                <label className="form-label required">Destacado </label>
                <div className="form-check">
                  <input className="checkbox-inline" type="checkbox" name='privilege'
                    checked={product.privilege && true ? true : false} onChange={handleChangeCheck} />
                </div>
              </div>

              <div className="col-6 col-sm-6">
                <div className="mb-3 mt-5">
                  <input className="form-control" type="file" id="url_image" name='url_image'
                    required={id ? false : true} onChange={handleFileChange} />
                </div>
              </div>
              {
                action === 'edit' && product.url_image !== null ?
                  <div className="col-6 col-sm-6">
                    <div className="mb-3 mt-3">
                      <img src={product.url_image} alt="Imagen" width="180" height="180" />
                    </div>
                  </div>
                  :
                  <div></div>
              }
            </div>

            <div className='modal-footer'>
              <button type='button' className='btn btn-secondary'
                data-bs-dismiss="modal" onClick={cancelDelete}>
                Regresar
              </button>
              <button type="submit" className='btn btn-success'>
                {action === 'edit' ? 'Editar' : 'Agregar'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
