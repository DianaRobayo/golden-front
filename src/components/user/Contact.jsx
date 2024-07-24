import React from 'react'
import { Navbar } from '../Navbar';
import banner from '../../img/banner-contact.jpg';
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import letrero from '../../img/letrero.jpg';


export const Contact = () => {
  return (
    <div className='contact-page'>
      <Navbar />
      <div className='contact-page__banner'>
        <img src={banner} className="" alt="banner" />
      </div>

      <div className='row'>
        <div className="col-sm-6 col-lg-4 mb-4 mt-2 p-2 card-contact" >
          <div className=" text-center">
            <div className="">
              <img src={letrero} className="mb-5 bg-body rounded" width="600" height="520" alt={'letrero'} />
            </div>
          </div>
        </div>
      </div>

      <div className='contact-page__socials p-5 mb-12'>
        <h2 className='mb-5 text-primary-dark'> Gracias por visitar nuestra página </h2>
        <div className="row g-4 align-items-center">
          <div className='col col-12 col-md-4'>
            <a href="https://www.instagram.com/goldenskymc/" className="fs-1 me-4 icon-instagram"
              target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <p>Nos puedes seguir en nuestra red social de instagram @goldenskymc</p>


          </div>
          <div className='col col-12 col-md-4'>
            <a href="https://wa.me/3194773326" className="fs-1 me-4 text-success"
              target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
            <p>Whatsapp +57 319 4773326</p>
          </div>
          <div className='col col-12 col-md-4'>
            <div className="fs-1 text-primary"> <CiMail />  </div>
            <p>Nos puedes escribir a nuestro correo electrónico goldenskymc1@gmail.com</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
