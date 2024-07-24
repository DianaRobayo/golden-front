import React, { useEffect, useState } from 'react'
import { Navbar } from '../Navbar';
import { Carousel } from '../Carousel';
import { CardHome } from '../CardHome';
import { useParams } from 'react-router-dom';
import { Footer } from '../Footer';

export const Categories = () => {
  const { page } = useParams();
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitleCategory();
  }, []);


  const setTitleCategory = () => {
    switch (Number(page)) {
      case 1:
        setTitle('Portavasos');
        break;

      case 2:
        setTitle('Portacelulares');
        break;

      case 3:
        setTitle('Llaveros');
        break;

      default:
        break;
    }
  }

  return (
    <div>
      <Navbar />
      <div className='container'>
        <h3 className='mt-5'>{title}</h3>
        <CardHome screen={page} />
      </div>
      <Footer />
    </div>
  )
}
