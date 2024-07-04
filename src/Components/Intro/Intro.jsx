import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import './Intro.css'
import world from '../../assets/world.png'
import 'aos/dist/aos.css'; 
import AOS from 'aos';

const Intro = () => {
  const [storedId, setStoredId] = useState('');
  useEffect(() => {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
          setStoredId(storedUserId);
      }
  }, [storedId]);

    useEffect(() => {
      AOS.init({
        duration: 3000, // Durée de l'animation en ms
        easing: 'ease-in-out', // Type de transition
        once: true, // L'animation se produit une seule fois
        offset: 200 // Décalage par rapport au défilement de la page en pixels
      
     } ); // Initialisation d'AOS
    }, []);

  return (
    <>
  
      <div className="row row-cols-1 row-cols-md-2 g-4">
        <div className="col border-0" data-aos="fade-up">
          <div className="card border-0 intro-card1 bg-transparent">
           <h1 className="mb-4">Bienvenue sur CitizenConnect</h1>
 
           <p className='mb-4'>Découvrez une nouvelle dimension de l'engagement citoyen. Ensemble, nous façonnons l'avenir à travers l'innovation et la participation active. Explorez nos initiatives,
             partagez vos idées et engagez-vous pour un monde meilleur.</p>
         <Link to="/AddUser"><button >S'inscrire</button></Link> 
          </div>
        </div>
        <div className="col">
          <div className="card border-0 bg-transparent">
           <img src={world} alt="" className='main-image'/>
          </div>
        </div>
      </div>
   
    </>
  )
}

export default Intro
