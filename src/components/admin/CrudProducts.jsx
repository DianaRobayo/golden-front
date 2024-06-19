import React, { useEffect, useState } from 'react'
import { Table } from './Table';
import { FaEdit } from "react-icons/fa";
import { getAllCategories, getAllProduct } from '../../services/apiService.service';
import { Navbar } from '../Navbar';
import { Footer } from '../Footer';
import { useForm } from "react-hook-form"

export const CrudProducts = () => {

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(0);
  const [editedProduct, setEditedProduct] = useState({});
  const { register, formState: { errors } } = useForm();

  const columns = [
    { header: 'Id', accessorKey: 'id_product' },
    { header: 'Producto', accessorKey: 'product_name' },
    { header: 'Materiales', accessorKey: 'material' },
    { header: 'Descripción', accessorKey: 'description' },
    { header: 'Precio', accessorKey: 'price' },
    { header: 'Url de la imagen', accessorKey: 'url_image' },
    { header: 'Privilegio', accessorKey: 'privilege' },
    { header: 'Categoría', accessorKey: 'id_category' },
    {
      header: 'Editar', accessorKey: '', cell: (value) => (
        <button className="btn btn-success" data-bs-toggle="modal"
          data-bs-target="#editModal" onClick={
            () => {
              const id = value.row.original.id_product;
              console.log('id', id);
              setEditingId(id);
              // // Activamos el estado de edición
              // setIsEditing(true);

              const productToEdit = products.find(obj => obj.id_product === id);
              console.log('prod', productToEdit)
              // // Establecemos los datos de la persona a editar
              setEditedProduct({ ...productToEdit });

            }}>
          <FaEdit />
        </button>
      )
    }
  ];

  /* Productos */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await getAllProduct();
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

  /* Categorias */
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

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('event', event);
  };

  /* Detecta cambios de la categoria */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
      ...prevState,
      [name]: value
    }));
  }


  if (!products) {
    return <div>El producto no se encuentra</div>;
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
        <h2>Productos de la aplicación</h2>
        <Table data={products} columns={columns} name={'Producto'} />

        {/* Modal */}
        <div id="editModal" className='modal fade' tabIndex='-1'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h3 className='modal-title'>Producto</h3>
                <button type='button' className='btn-close' data-bs-dismiss="modal"
                  aria-label='close' >
                </button>
              </div>

              <div className='modal-body'>
                <form onSubmit={handleSubmit}>
                  <div className="row row-cols-3 p-2">
                    <div className="col-6 col-sm-6">
                      <label className="form-label required">Nombre del producto </label>
                      <input type="text" className='form-control' name="product_name"
                        value={editedProduct.product_name || ''} onChange={handleChange} required />
                      {errors.product_name && <p>This field is required</p>}
                    </div>
                    <div className="col-6 col-sm-6">
                      <label className="form-label">Materiales </label>
                      <textarea rows="2" class="form-control" id="message-text" 
                        value={editedProduct.material || ''} onChange={handleChange}>
                      </textarea>
                    </div>
                    <div className="col-4 col-sm-4">
                      <label className="form-label required">Precio </label>
                      <input type="number" className='form-control' name="price"
                        value={editedProduct.price || 0} required />
                    </div>
                    <div className="col-8 col-sm-8">
                      <label class="col-form-label">Descripción </label>
                      <textarea rows="2" class="form-control" id="message-text" 
                        value={editedProduct.description || ''} required>
                      </textarea>
                    </div>                   
                    <div className="col-12">
                      <label className="form-label required">Url </label>
                      <textarea rows="2" cols="" value={editedProduct.url_image || ''} >
                      </textarea>
                      <div class="mb-3">
                        <label for="formFile" class="form-label">Default file input example</label>
                        <input className="form-control" type="file" id="formFile"/>
                      </div>
                    </div>
                    <div className="col-6 col-sm-6">
                      <label className="form-label">Privilegio </label>
                      <input type="text" className='form-control' name="privilege" 
                       value={editedProduct.privilege || ''} onChange={handleChange} />
                    </div>
                    <div className="col-6 col-sm-6">
                      <label className="form-label">Categoría </label>
                      {/* <select name="id_category" id="category" className='form-control'>
                        {
                          categories.map((data, index) => (
                            <option value={data.id_category}>
                              {data.category_name}
                            </option>
                          ))
                        }
                      </select> */}
                    </div>
                  </div>

                  <div className='modal-footer'>
                    <button type='button' className='btn btn-secondary'
                      data-bs-dismiss="modal" >
                      Cancelar
                    </button>
                    <button type="submit" className='btn btn-success'
                      data-bs-dismiss="modal" >
                      Agregar
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
