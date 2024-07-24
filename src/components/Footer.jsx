import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { GiPositionMarker } from "react-icons/gi";


export const Footer = () => {
  return (
    <div className='style-footer'>
      <hr />
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span className='text-white'>Síguenos en nuestra red social de Instagram:</span>
          </div>

          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/goldenskymc/" className="fs-4 me-4 text-white" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase text-white fw-bold mb-4">
                  Categorías
                </h6>
                <p>
                  <a href="/categoria/1" className="text-white">Portavasos</a>
                </p>
                <p>
                  <a href="/categoria/2" className="text-white">Portacelulares</a>
                </p>
                <p>
                  <a href="/categoria/3" className="text-white">Llaveros</a>
                </p>
              </div>

              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase text-white fw-bold mb-4">
                  GoldenSkyMc
                </h6>
                <p className='text-white'>
                  Para mayor información contactanos por estos redes
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase text-white fw-bold mb-4">Contacto</h6>
                <p> <GiPositionMarker className="text-danger me-2" />
                  <span className='text-white'> Bogotá D.C </span>
                </p>
                <p> <CiMail className="text-primary me-2" />
                  <span className='text-white'>goldenskymc1@gmail.com</span>
                </p>
                <p> <a href="https://wa.me/3194773326" className="text-success me-2"
                  target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                  <span className='text-white'> WhatsApp +57 319 4773326 </span>
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- Copyright --> */}
        <div className="text-center text-white p-4" >
          © 2024 Goldenskymc
        </div>
      </footer>
    </div>
  )
}
