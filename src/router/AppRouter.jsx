import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Login } from '../components/Login'
import { Home } from '../components/Home'
import { Contact } from '../components/user/Contact'
import { Categories } from '../components/user/Categories'
import { DetailProduct } from '../components/user/DetailProduct'
import { CrudCategories } from '../components/admin/category/CrudCategories'
import { CrudProducts } from '../components/admin/product/CrudProducts'
import { FormProduct } from '../components/admin/product/FormProduct'
import { FormCategory } from '../components/admin/category/FormCategory'

export const AppRouter = () => {
  return (
    <Router>
      {/* Menu de navegación */}

      {/* Configurar las rutas */}
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/inicio' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/categoria/:page?' element={<Categories />}></Route>
        <Route path='/detalle/:id' element={<DetailProduct />}></Route>
        <Route path='/contacto' element={<Contact />}></Route>
        <Route path='/crud-categorias' element={<CrudCategories />}></Route>
        <Route path='/crud-productos' element={<CrudProducts />}></Route>
        <Route path='/form-productos/:action/:id?' element={<FormProduct />}></Route>
        <Route path='/form-categorias/:action/:id?' element={<FormCategory />}></Route>
        <Route path='*' element={(
          <div>
            <h1>Error en la página</h1>
          </div>
        )}></Route>
      </Routes>
    </Router>
  )
}
