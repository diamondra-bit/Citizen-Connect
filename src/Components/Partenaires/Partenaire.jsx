import React from 'react'
import codeCloud from './codeCloud.jpg'
import Fihary from './Fihary.png'
import GIGATech from './GIGATech.png'
import innovT from './innovT.jpg'
import MTC from './MTC.jpg'
import './Partenaire.css'
import 'aos/dist/aos.css'; 
import AOS from 'aos';
import { useEffect } from 'react'

const Partenaire = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, 
      easing: 'ease-in-out', 
      once: true,
      offset: 200 
    
   } ); 
  }, []);
  return (
    <div 
    className='card bg-transparent horizontal-card partenaire-container'>
      <h1 className='mb-4'>Partenaires</h1>
      
      <div className="logo-container">
      <div>
        <div className="logo" data-aos="fade-up" ><img src={Fihary} alt="" /></div>
        <p>Fihary Soft</p>
      </div>

      <div>
        <div className="logo" data-aos="fade-up" ><img src={GIGATech} alt="" /></div>
        <p>Giga Tech</p>
      </div>

      <div>
        <div className="logo" data-aos="fade-up" ><img src={innovT} alt="" /> </div>
        <p>innovT</p>
      </div>

      <div>
        <div className="logo" data-aos="fade-up" ><img src={codeCloud} alt="" /></div>
        <p>codeCloud</p>
      </div>

      <div>
        <div className="logo" data-aos="fade-up" ><img src={MTC} alt="" /></div>
        <p>MTC</p>
      </div>

      </div>
     
    </div>
  )
}

export default Partenaire
