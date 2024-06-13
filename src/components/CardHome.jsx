import React from 'react'
import haku from '../img/portavasos/haku1.png';
import bruja from '../img/portavasos/bruja1.png';
import chihiro from '../img/portavasos/chihiro.png';
import pulgas from '../img/portavasos/pulgas1.png';
import bo from '../img/portavasos/bo.png';
import kikis from '../img/portavasos/kikis1.png';
import ponyo from '../img/portavasos/ponyo1.png';
import totoro from '../img/portavasos/totoro1.png';

export const CardHome = () => {
  const products = [
    { image: haku, product_name: 'Haku', price: '2000', description: 'Text product' },
    { image: pulgas, product_name: 'Susuwatari', price: '2000', description: 'Text product' },
    { image: bruja, product_name: 'Yubaba', price: '2000', description: 'Text xx' },
    { image: chihiro, product_name: 'Chihiro', price: '2000', description: 'Text product' },
    { image: bo, product_name: 'Bō', price: '2000', description: 'Text product' },
    { image: kikis, product_name: 'Kikis', price: '2000', description: 'Text product' },
    { image: ponyo, product_name: 'Ponyo', price: '2000', description: 'Text product' },
    { image: totoro, product_name: 'Totoro', price: '2000', description: 'Text product' }

  ];

  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center">
        {products.map((data, index) => (
          <div className="col" key={index}>
            <div className="card">
              <div className="numberCircle">$ {data.price}</div>
              <img src={data.image} className="card-img-top" alt={data.product_name} />
              <div className="card-body home">
                <details>
                  <summary>
                    {data.product_name.toUpperCase()}
                  </summary>
                  {/* <div className="row row-cols-1 row-cols-md-2 g-4"> */}
                  {/* <p className="card-text">{data.description}</p> */}
                  {/* </div> */}

                  <p>
                    {data.description}
                  </p>
                </details>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}
