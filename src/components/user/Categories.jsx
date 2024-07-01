import React from 'react'
import { Navbar } from '../Navbar';
import { Carousel } from '../Carousel';
import { CardHome } from '../CardHome';
import { useParams } from 'react-router-dom';

export const Categories = () => {
  const { page } = useParams();
  console.log('od', page)

  return (
    <div>
      <Navbar />
      <div className='container'>
        <Carousel />
        <br />
        <CardHome screen={page}/>
      </div>
    </div>
  )
}
