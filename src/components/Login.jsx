import React, { useEffect } from 'react'
import logo from '../img/logo_sin_fondo.png';
import portada from '../img/img-login.png';
import { FaInstagram } from "react-icons/fa6";

export const Login = () => {
  
  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  return (
    <div>
      <section className="section-login">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card style-card " >
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={portada}
                      alt="login form" className="img-fluid style-img" />
                  </div>

                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5  text-black">
                      <form>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img src={logo} className='mx-auto d-block w-50' alt="GoldenSkyMc" />
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 text-white" >Inicia sesión</h5>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="email" id="input-email"
                            className="form-control form-control-lg" placeholder='Correo electrónico' 
                            required/>
                        </div>

                        <div data-mdb-input-init className="form-outline mb-4">
                          <input type="password" id="input-pass"
                            className="form-control form-control-lg" placeholder='Contraseña' 
                            required/>
                        </div>

                        <div className="pt-1 mb-4">
                          <button data-mdb-button-init data-mdb-ripple-init
                            className="btn btn-secondary btn-lg btn-block" type="button">
                            Ingresar
                          </button>
                        </div>

                        {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                        {/* <p className="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                          style="color: #393f81;">Register here</a></p> */}
                        {/* <a href="#!" className="small text-muted">Terms of use.</a> */}
                        {/* <a href="#!" className="small text-muted">Privacy policy</a> */}
                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-floating mx-1">
                          <FaInstagram />
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
