import React from 'react'
import { Navbar } from '../Navbar';
import { Carousel } from '../Carousel';
import { CardHome } from '../CardHome';

export const Categories = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Carousel />
        <br />
        <CardHome screen="category"/>
      </div>
    </div>
  )
}
