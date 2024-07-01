import React from 'react'
import chihiro1 from '../img/portavasos/chihiro1.jpg';
import chihiro2 from '../img/portavasos/chihiro2.jpg';
import chihiro3 from '../img/portavasos/chihiro3.jpg';
import pikachu from '../img/portavasos/pikachu1.png';
import squartle from '../img/portavasos/squartle1.png';
import hipo from '../img/portacelular-hipo.jpg';
import leon from '../img/portacelular-leon.jpg';


export const Carousel = () => {
  const products = [
    { image: chihiro1, product_name: 'Ratón'},
    { image: pikachu, product_name: 'Pikachu'},
    { image: hipo, product_name: 'Hipo'},
    { image: chihiro2, product_name: 'Pulgas'},
    { image: squartle, product_name: 'Squartle'},
    { image: leon, product_name: 'León'}, 
    { image: chihiro3, product_name: 'Dragón'}
  ];

  return (
    <div className=''>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {products.map((data, index) => (
            <div className={index === 0 ? "carousel-item active" : "carousel-item"} key={index}>

              <img src={data.image} className="d-block"  alt={data.product_name} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
