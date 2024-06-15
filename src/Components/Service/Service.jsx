import React from 'react'
import {Link} from 'react-router-dom'
import './Service.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from 'react'

const Service = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      easing: 'ease-in-out', 
      once: true, 
      offset: 200 
    
   } );
  }, []);
  const storedId = localStorage.getItem('storedId');

  const linkTo = storedId ? '/login' : '/impot';
  const linkTo2 = storedId ? '/login' : '/acte';
  const linkTo3 = storedId ? '/login' : '/lastService';

  return (
    
    <div className='services-container'>
     
    <h1 className='text-center mb-4'>Nos services</h1>
    <br />
    <div className="row row-cols-1 row-cols-md-3 g-4 ">
    <div className="col">
    <div className="card horizontal-card" data-aos="fade-up" >
       <h3 className='btn-center'>Paiement des Impôts</h3>
       <p>Gestion et paiement des impôts, consultation des documents fiscaux, et assistance pour les déclarations fiscales</p>
       <Link className='btn-center' to={linkTo}> <button className='btn-center'>Découvrir</button></Link>
    </div>
    </div>
    <div className="col">
      <div className="card horizontal-card" data-aos="fade-up"
     >
        <h3 className='btn-center'>Actes d'état civil</h3>
        <p>Demande et délivrance d'actes d'état civil tels que les actes de naissance, de mariage et de décès.</p>
        <Link className='btn-center' to={linkTo2}> <button className='btn-center'>Découvrir</button></Link>
      </div>
    </div>
    <div className="col">
      <div className="card horizontal-card" data-aos="fade-up"
     >
        <h3 className='btn-center'>Services communaux</h3>
        <p> Accès aux services municipaux, comme la demande de permis de construire, la gestion des déchets, </p>
        <Link className='btn-center' to={linkTo3}> <button >Découvrir</button></Link>
        </div>
    </div>
  </div>
  </div>
  )
}

export default Service
