import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Categorias } from '../components/Categorias'
import { DetailProduct } from '../components/DetailProduct'

export const AppRouter = () => {
  return (
    <Router>
      {/* Menu de navegación */}

      {/* Configurar las rutas */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/categoria' element={<Categorias />}></Route>
        <Route path='/detalle' element={<DetailProduct />}></Route>
        {/* <Route path='/acerca-de' element={<About />}></Route> */}
        <Route path='/contacto' element={<Contact />}></Route>
        <Route path='*' element={(
          <div>
            <h1>Error en la página</h1>
          </div>
        )}></Route>
      </Routes>
    </Router>
  )
}
