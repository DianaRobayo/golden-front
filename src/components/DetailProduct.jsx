import React from 'react'
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FaInstagram } from "react-icons/fa";
import totoro from '../img/portavasos/totoro1.png';

export const DetailProduct = () => {
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
                <h5 className="card-title mb-4">TOTORO</h5>
                <p className="card-text fs-3 fw-bold text-start">$ 5000</p>

                <div className="d-flex align-items-start">
                  <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Detalle</button>
                    <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Materiales</button>
                  </div>

                  <div className="tab-content" id="v-pills-tabContent">
                    <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut laudantium maxime eos eaque sunt earum ex nulla doloribus minima, nihil mollitia! Aliquid, illum distinctio! Non veritatis amet eaque numquam aliquid.</div>
                    <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                      $5000
                    </div>
                  </div>
                </div>

                <p className="card-text mt-5">
                  <small className="text-muted">Síguenos en 
                    <a href="https://www.instagram.com/goldenskymc/" className="ms-2 text-reset">
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
