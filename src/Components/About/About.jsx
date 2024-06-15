import React from 'react'
import './About.css'
import about from '../../assets/main.png'
import 'aos/dist/aos.css'; 
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      easing: 'ease-in-out', 
      once: true, 
      offset: 200 
    
   } ); 
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 about-container">
      
    <div className="col-md-5">
      <div className="card border-0  bg-transparent ">
       <img src={about} alt="" className='img-about' data-aos="fade-up" />
      </div>
    </div>
    <div className="col-md-7">
      <div className="card border-0 bg-transparent "data-aos="fade-up" >
       < h1 className=" mb-4">A propos</h1>
       <p className='mb-4'>Cityzenn est une plateforme destinée à améliorer la gestion publique à travers l'utilisation de technologies numériques avancées. Elle vise à transformer la manière dont les gouvernements et les municipalités interagissent avec les citoyens, en facilitant l'accès aux services publics, en optimisant les processus administratifs et en favorisant une participation citoyenne accrue.</p>
     <Link to="/login"> <button >Se connecter</button></Link>
      </div>
    </div>
  </div>
  )
}

export default About
