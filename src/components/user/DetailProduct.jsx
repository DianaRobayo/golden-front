import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar.jsx';
import { Footer } from '../Footer.jsx';
import { FaInstagram } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../../services/apiService.service.js';
import totoro from '../../img/portavasos/totoro1.png';

export const DetailProduct = () => {

  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetailProduct = async () => {
      try {
        const res = await fetchProduct(id);

        if (res) {
          setProduct(res);
        } else {
          console.log('error')
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getDetailProduct();
  }, [id]);


  const handleGoBackClick = () => {
    // Redirigir a la página de los productos
    window.history.back();
  };

  if (!product) {
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
        <div className="card mb-3 mw-100 mt-5">
          <div className="row g-0">
            <div className="col-md-4 p-2">
              <img src={totoro} className="img-fluid rounded-start" alt="totoro" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title mb-4">{product.product_name}</h5>
                <p className="card-text fs-3 fw-bold text-start">$ {product.price}</p>

                <div className="d-flex align-items-start">
                  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Detalle</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Materiales</button>
                  </div>

                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      {product.description}
                    </div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      <ul>
                        {product.material.split(', ').map((data, index) => (
                          <li key={index} >
                            {data}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className='d-flex'>
                  <div>
                    <button type="button" className="btn btn-outline-success rounded" onClick={handleGoBackClick}>Regresar</button>
                  </div>
                </div>

                <p className="card-text mt-5">
                  <small className="text-muted">Síguenos en
                    <a href="https://www.instagram.com/goldenskymc/" target="_blank" rel="noopener noreferrer" className="ms-2 text-reset">
                      <FaInstagram />
                    </a>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
