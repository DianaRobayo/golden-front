import React from 'react'
import { Carousel } from './Carousel';
import { CardHome } from './CardHome';
import { Footer } from './Footer';
import { Navbar } from './Navbar';


export const Home = () => {

  return (
    <>
      <Navbar />
      <div className='container'>
        <Carousel />
        <br />
        <CardHome screen="home"/>
      </div>

      <Footer />
    </>
  )
}
