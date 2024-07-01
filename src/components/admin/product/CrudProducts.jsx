import React, { useEffect, useState } from 'react'
import { Table } from '../Table';
import { FaEdit } from "react-icons/fa";
import { editProductService, getAllCategoriesService, getAllProductService } from '../../../services/apiService.service';
import { Navbar } from '../../Navbar';
import { Footer } from '../../Footer';
// import { useForm } from "react-hook-form"
import { ModalProduct } from './ModalProduct';
import axios from 'axios';

export const CrudProducts = () => {

  const [products, setProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState({});
  // const { register, formState: { errors } } = useForm();
  const [titleModal, setTitleModal] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [file, setFile] = useState(null);
  const [baseUrl, setBaseUrl] = useState('');

  const columns = [
    { header: 'Id', accessorKey: 'id_product' },
    { header: 'Producto', accessorKey: 'product_name' },
    { header: 'Categoría', accessorKey: 'category.category_name' },
    {
      header: 'Url de la imagen', accessorKey: 'url_image', cell: (value) => (
        <img src={value.row.original.url_image} alt="image" width="85" height="85" />
      )
    },
    {
      header: 'Precio', accessorKey: 'price', cell: (value) => (
        <p> ${value.row.original.price}</p>
      )
    },
    { header: 'Materiales', accessorKey: 'material' },
    { header: 'Descripción', accessorKey: 'description' },
    {
      header: 'Destacado', accessorKey: 'privilege', cell: (value) => (
        <p>{value.row.original.privilege ? 'Si' : 'No'}</p>
      )
    },
    {
      header: 'Editar', accessorKey: '', cell: (value) => (
        <button className="btn btn-success" data-bs-toggle="modal"
          data-bs-target="#editModal" onClick={
            () => {
              setTitleModal('Editar producto');
              const id = value.row.original.id_product;

              setEditingId(id);
              // Activamos el estado de edición
              setIsEditing(true);

              const productToEdit = products.find(obj => obj.id_product === id);
              // console.log('prod', productToEdit)
              // Establecemos los datos de la persona a editar
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
    console.log('event', event);
  };

  /* Detecta cambios del producto */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct(prevState => ({
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
    setEditedProduct(prevState => ({
      ...prevState,
      privilege: privilege
    }));
  }

  /* Detecta cambios en la carga de archivo */
  const handleFileChange = (e) => {
    setBaseUrl('http://localhost:3001/');
    if (e.target.files) {
      setFile(e.target.files[0]);
      setEditedProduct(prevState => ({
        ...prevState,
        url_image: 'http://localhost:3001/' + e.target.files[0].name
      }));
    }
  };

  /* Metodo para guardar al momento de editar */
  const handleSave = (e) => {
    setProducts(products.map(product => product.id_product === editingId ? editedProduct : product));
    setEditingId(null);
    setEditedProduct({
      product_name: '',
      description: '',
      material: '',
      url_image: '',
      price: '',
      privilege: '',
      id_category: '',
      categoryIdCategory: '',
      category: []
    });
    setIsEditing(false);

    // Se crea objeto de producto incluyendo la imagen
    const formData = new FormData();
    formData.append('file', file);
    formData.append('product_name', editedProduct.product_name);
    formData.append('description', editedProduct.description);
    formData.append('material', editedProduct.material);
    formData.append('url_image', editedProduct.url_image);
    formData.append('price', editedProduct.price);
    formData.append('privilege', editedProduct.privilege);
    formData.append('id_category', editedProduct.id_category);
    formData.append('categoryIdCategory', editedProduct.id_category);

    // Servicio de editar
    editProductService(editingId, formData).then((res) => {
      console.log('editado', res)

    }, (error) => {
      console.log('error', error)
    });
  }

  const setTitleCreate = () => {
    setTitleModal('Crear producto');
  }

  /* Metodo para guardar y crear un producto */
  const handleCreate = () => {
    setProducts([...products, { id_category: products.length + 1, ...editedProduct }]);
    setEditedProduct({
      product_name: '',
      description: '',
      material: '',
      url_image: '',
      price: '',
      privilege: '',
      id_category: '',
      categoryIdCategory: '',
      category: []
    });
  }

  const cancelDelete = () => {
    setEditingId(null);
    setDeleteId(null);
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
      <div className='container mt-5'>
        <h2>Productos de la aplicación</h2>
        <Table data={products} columns={columns} name={'Producto'}
          titleModal={titleModal} setTitle={setTitleCreate} />

        {/* Modal */}
        <div id="editModal" className='modal fade' tabIndex='-1'>
          <ModalProduct titleModal={titleModal} cancelDelete={cancelDelete}
            handleSubmit={handleSubmit} editedProduct={editedProduct}
            handleChange={handleChange} handleSave={handleSave} categories={categories}
            editingId={editingId} handleCreate={handleCreate} isEditing={isEditing}
            handleChangeCheck={handleChangeCheck} handleFileChange={handleFileChange} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
