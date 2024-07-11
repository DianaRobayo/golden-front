import React, { useEffect, useState } from 'react'
import logo from '../img/logo_sin_fondo.png';
import portada from '../img/img-login.png';
import { FaInstagram } from "react-icons/fa6";
import { loginService } from '../services/apiService.service';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export const Login = () => {

  const [formUser, setFormUser] = useState(null);
  const navigate = useNavigate();   // Hook para redirigir

  useEffect(() => {
    document.body.classList.add("login-page");
    return () => {
      document.body.classList.remove("login-page");
    };
  }, []);

  /* Detecta cambios del formulario de usuario */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormUser(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const loginUser = async (e) => {
    // prevenir que se actualice la pantalla
    e.preventDefault();

    // Servicio de logueo
    loginService(formUser).then((res) => {
      if (res) {
        localStorage.setItem("token", res.access_token);
        localStorage.setItem("user", JSON.stringify(res.user));
        
        Swal.fire({
          title: '¡Bienvenido!',
          confirmButtonText: 'Continuar',
        }).then(() => {
          // Redirigir
          navigate('/inicio');
        });
      }
    }, (error) => {
      Swal.fire({
        title: 'Error al iniciar sesión verifique por favor su correo y contraseña',
        icon: 'error',
        confirmButtonText: 'Intentar nuevamente',
      });
    });
  };

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
                      <form onSubmit={loginUser}>

                        <div className="d-flex align-items-center mb-3 pb-1">
                          <img src={logo} className='mx-auto d-block w-50' alt="GoldenSkyMc" />
                        </div>

                        <h5 className="fw-normal mb-3 pb-3 text-white" >Inicia sesión</h5>

                        <div className="form-outline mb-4">
                          <input type="email" id="input-email" onChange={handleChange}
                            className="form-control form-control-lg" placeholder='Correo electrónico'
                            name="email" required />
                        </div>

                        <div className="form-outline mb-4">
                          <input type="password" id="input-pass" onChange={handleChange}
                            className="form-control form-control-lg" placeholder='Contraseña'
                            name="password" required />
                        </div>

                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn_style btn-lg btn-block" type="submit">
                            Ingresar
                          </button>
                        </div>

                        {/* <a className="small text-muted" href="#!">Forgot password?</a> */}
                        {/* <p className="mb-5 pb-lg-2" style="color: #393f81;">Don't have an account? <a href="#!"
                          style="color: #393f81;">Register here</a></p> */}
                        {/* <a href="#!" className="small text-muted">Terms of use.</a> */}
                        {/* <a href="#!" className="small text-muted">Privacy policy</a> */}
                        <a href="https://www.instagram.com/goldenskymc/" className="fs-1 icon-instagram"
                          target="_blank" rel="noopener noreferrer">
                          <FaInstagram />
                        </a>
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
