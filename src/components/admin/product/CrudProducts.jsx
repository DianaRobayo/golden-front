import React, { useEffect, useState } from 'react'
import { Table } from '../Table';
import { FaEdit } from "react-icons/fa";
import { getAllProductService } from '../../../services/apiService.service';
import { Navbar } from '../../Navbar';
import { Footer } from '../../Footer';
import { useNavigate } from 'react-router-dom';


export const CrudProducts = () => {

  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingId, setEditingId] = useState(0);
  const [deleteId, setDeleteId] = useState(null);
  const [titleModal, setTitleModal] = useState('');
  const navigate = useNavigate();   // Hook para redirigir

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
        <button className="btn btn-success" onClick={
            () => {
              const id = value.row.original.id_product;
              navigate(`/form-productos/edit/${id}`);
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

  const setTitleCreate = () => {
    setTitleModal('Crear producto');
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
      </div>

      <Footer />
    </div>
  )
}
