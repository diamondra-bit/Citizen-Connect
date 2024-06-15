import React from 'react'
import { useState } from 'react';
import about from '../../assets/about.png'
import './Footer.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


const Footer = () => {
    const navigate=useNavigate();

    const [storedId, setStoredId] = useState('');
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setStoredId(storedUserId);
        }
    }, [storedId]);

    const handleClick = () => {
        localStorage.removeItem('userId');
        setStoredId(''); 
        navigate('/login')
        };

    useEffect(() => {
        AOS.init({
          duration: 3000, // Durée de l'animation en ms
          easing: 'ease-in-out', // Type de transition
          once: true, // L'animation se produit une seule fois
          offset: 200 // Décalage par rapport au défilement de la page en pixels
        
       } ); 
      }, []);
  return (
    <div className="footer-container">
    <footer class="footer-citizen  text-white mt-5">
    <div class="container" >
        <div class="row pt-5 ">
            <div class="col-md-4">
                {/* <img src={about} alt="" className='img-footer'/> */}
            </div>
            <div class="col-md-4">
                <h5>CitizenConnect</h5>
                <p className='cityzen-p'>Cityzen est une plateforme de gestion 
                     de l'e-gouvernance dédiée à améliorer la transparence et l'efficacité des services publics.</p>
            </div>
            
            <div class="col-md-4">
                <h5>Contact</h5>
                <div>
                    Tanambao,Fianarantsoa
                    <br />
                    <a href="info@cityzen.com" class="text-white">info@exemple.com</a>
                </div>
            </div>
            <div class="col-md-4">
                <button className="logOut" onClick={handleClick}>Se déconnecter</button>
            </div>
        </div>
        <div class="text-center final">
            &copy; Team Atchoum. Tous droits réservés.
        </div>
    </div>
</footer>
</div>
  )
}

export default Footer
