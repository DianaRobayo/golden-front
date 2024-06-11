import React from 'react'
import { Navbar } from './Navbar';
import { Carousel } from './Carousel';
import { CardHome } from './CardHome';

export const Portavasos = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Carousel />
        <br />
        <CardHome />
      </div>
    </div>
  )
}
