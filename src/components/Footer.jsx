import React from 'react'
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export const Footer = () => {
  return (
    <div className='style-footer'>
      <hr />
      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        {/* <!-- Section: Social media --> */}
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          {/* <!-- Left --> */}
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* <!-- Left --> */}

          {/* <!-- Right --> */}
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/goldenskymc/" className="me-4 text-reset" target="_blank" rel="noopener noreferrer">
              <FaInstagram /> 
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </section>
        {/* <!-- Section: Social media --> */}

        {/* <!-- Section: Links  --> */}
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* <!-- Content --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>GoldenSkyMc
                </h6>
                <p>
                  Para mayor información contactanos por estos medios
                </p>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">
                  Categorías
                </h6>
                <p>
                  <a href="#!" className="text-reset">Portacelulares</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Portavasos</a>
                </p>
                <p>
                  <a href="#!" className="text-reset">Llaveros</a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* <!-- Links --> */}
                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
                <p><i className="fas fa-home me-3"></i> Bogotá D.C</p>
                <p> <CiMail /> goldenskymc1@gmail.com </p>
                <p><FaWhatsapp />WhatsApp +57 319 4773326</p>
              </div>
            </div>

          </div>
        </section>

        {/* <!-- Copyright --> */}
        {/* style="background-color: rgba(0, 0, 0, 0.05);" */}
        <div className="text-center p-4" >
          © 2024 Goldenskymc
          {/* <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a> */}
        </div>
      </footer>
    </div>
  )
}
