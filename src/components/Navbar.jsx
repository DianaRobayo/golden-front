import React, { useEffect, useState } from 'react'
import logo from '../img/logo_sin_fondo.png';
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";


export const Navbar = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const actionUser = async () => {
      try {
        setUsuario(JSON.parse(localStorage.getItem("user")));
      } catch (error) {

      }
    };
    actionUser();
  }, []);

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-navbar">
        <div className="container-fluid">
          <a className="navbar-brand ms-5" href="/">
            <img src={logo} alt="logo" width="55" height="55" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item me-2">
                <a className="nav-link active text-white" aria-current="page" href="/inicio"
                  data-bs-placement="top" title="Inicio">
                  INICIO
                </a>
              </li>

              <li className="nav-item dropdown me-2">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false"
                  data-bs-placement="top" title="Categorías">
                  CATEGORÍAS
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/categoria/1">Portavasos</a></li>
                  <li><a className="dropdown-item" href="/categoria/2">Portacelulares</a></li>
                  <li><a className="dropdown-item" href="/categoria/3">Llaveros</a></li>
                </ul>
              </li>

              <li className="nav-item me-2">
                <a className="nav-link" href="/contacto"
                  data-bs-placement="top" title="Contacto">
                  CONTACTO
                </a>
              </li>

              {usuario && usuario.rolesIdRol === 1 ?
                <>
                  <li className="nav-item dropdown me-2">
                    <a data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle "
                      id="navbarDropdown" role="button" aria-expanded="false"
                      data-bs-placement="top" title="CRUD">
                      CRUD
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      {/* <li><a className="dropdown-item" href="#">Usuarios</a></li> */}
                      <li><a className="dropdown-item" href="/crud-categorias">Categorías</a></li>
                      <li><a className="dropdown-item" href="/crud-productos">Productos</a></li>
                    </ul>
                  </li>

                  <li className="nav-item dropdown me-2">
                    <a data-bs-toggle="dropdown"
                      className="nav-link dropdown-toggle "
                      id="navbarDropdownMenuAvatar"
                      role="button" aria-expanded="false"
                      data-bs-placement="top" title="Usuario">
                      <FaUserCircle className='fs-5 me-2' />
                      {usuario ? usuario.username : ''}
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuAvatar">
                      <li><a className="dropdown-item" href="/cerrar-sesion">
                        Cerrar sesión
                      </a></li>
                    </ul>
                  </li>
                </>
                :
                <li className="nav-item dropdown me-2">
                  <a data-bs-toggle="dropdown"
                    className="nav-link dropdown-toggle "
                    id="navbarDropdownMenuAvatar"
                    role="button" aria-expanded="false"
                    data-bs-placement="top" title="Usuario">
                    <FaUserCircle className='fs-5 me-2' />
                    {usuario ? usuario.username : ''}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuAvatar">
                    <li><a className="dropdown-item" href="/login">
                      Iniciar sesión
                    </a></li>
                  </ul>
                </li>
              }
            </ul>
          </div>

          <div className="d-flex align-items-center">
            <a className="link-secondary ms-2 me-2" href="">
              <FaShoppingCart />
            </a>
          </div>
        </div>
      </nav>
    </div>
  )
}
