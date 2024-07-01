import React, { useEffect, useState } from 'react'
import comboPokemon from '../img/portavasos/combo-pokemon.png';
import comboPortacel from '../img/portacelular-combo.png';
import llaveros from '../img/llaveros.png';
import { getAllProductService } from '../services/apiService.service.js';

export const CardHome = ({ screen }) => {
  const [products, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  /* Productos */
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await getAllProductService();
        console.log('controler response', res)

        // const data = await response.json();
        if (res) {
          let respuesta;
          console.log('screen', typeof screen)
          switch (screen) {
            case 'home':
              respuesta = res.filter(obj => obj.privilege === true);
              break;
            default:
              respuesta = res.filter(obj => obj.id_category === Number(screen));
              break;
          }

          setProduct(respuesta);

        } else {
          console.log('error')
        }

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (!products) {
    return <div>El producto no se encuentra</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <>
      <div className="row row-cols-1 row-cols-md-3 g-4 align-items-center m-5">
        {
          products.map((data, index) => (
            <div className="col" key={index}>
              <div className="">
                <div className="numberCircle">$ {data.price}</div>
                <a href={`/detalle/${data.id_product}`} className="fs-1 me-4 text-success container-img">
                  <img src={data.url_image} className={screen === 'home' ? 'card__img-top-home' : 'card__img-top'} alt={data.product_name} />
                </a>
                <div className="card-body">
                  <details className="card-body__detail">
                    <summary>
                      {data.product_name.toUpperCase()}
                    </summary>
                    <p className='card-body__description'>
                      {data.description}
                    </p>
                  </details>
                </div>
              </div>
            </div>
          ))}
      </div >

      {
        screen === 'home' ?
          <div>
            <hr />
            <div className="row mt-5" >
              <div className="col-md-7 order-md-2 align-self-center" >
                <h2 className="fs-1 mt-lg-5">Promociones de combos. <span className="text-muted">Obtenlos ya!!.</span></h2>
                <p className="lead">Combo de portavasos todos pintados a mano hechos en madera y con acabados perfectos.</p>
                <p className="text-sm text-muted">Solo pide el diseño que desees.</p>
              </div>
              <div className="col-md-5 order-md-1" >
                <img src={comboPokemon} className="mb-5 bg-body rounded img-combo_pokemon" width="350" height="500" alt={'pokemon'} />
              </div>
            </div >

            <hr />
            <div className="row mt-5" >
              <div className="col-md-7 align-self-center" >
                <h2 className="fs-1 mt-lg-5">Combo de llaveros. <span className="text-muted">Ten el tuyo!!</span></h2>
                <p className="lead">Llaveros de Marvel, hechos a mano, su material en paño lency y con los diseños personalizados a tu gusto.</p>
              </div>
              <div className="col-md-5" >
                <img src={llaveros} className="mb-5 bg-body rounded img-combo_marvel" width="520" height="320" alt={'marvel'} />
              </div>
            </div>

            <hr />
            <div className="row mt-5" >
              <div className="col-md-7 order-md-2 align-self-center" >
                <h2 className="fs-1 mt-lg-5">Combo de portacelular. <span className="text-muted">Pide el animalito que te guste!!.</span></h2>
                <p className="lead">Portacelulares con forma de animalitos, diseños creativos, hechos a mano y en paño lency.</p>
              </div>
              <div className="col-md-5 order-md-1" >
                <img src={comboPortacel} className="mb-5 bg-body rounded img-combo_cel" width="400" height="400" alt={'portacelular'} />
              </div>
            </div >
          </div>
          :
          <div></div>
      }

    </>
  )
}
