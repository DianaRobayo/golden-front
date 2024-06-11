import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import { Contact } from '../components/Contact'
import { Portavasos } from '../components/Portavasos'

export const AppRouter = () => {
  return (
    <Router>
      {/* Menu de navegación */}

      {/* Configurar las rutas */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/portavasos' element={<Portavasos />}></Route>
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
