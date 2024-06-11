import React from 'react'
import chihiro1 from '../img/portavasos/chihiro1.jpg';
import chihiro2 from '../img/portavasos/chihiro2.jpg';
import chihiro3 from '../img/portavasos/chihiro3.jpg';
import chihiro4 from '../img/portavasos/chihiro4.jpg';
import kikis from '../img/portavasos/kikis.jpg';
import ponyo from '../img/portavasos/ponyo.jpg';
import totoro from '../img/portavasos/totoro.jpg';


export const Carousel = () => {
  const products = [
    { image: chihiro1, product_name: 'Ratón'},
    { image: chihiro2, product_name: 'Pulgas'},
    { image: chihiro3, product_name: 'Dragón'},
    { image: chihiro4, product_name: 'Dragón'},
    { image: kikis, product_name: 'Kikis'},
    { image: ponyo, product_name: 'Ponyo'},
    { image: totoro, product_name: 'Totoro'}  

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
