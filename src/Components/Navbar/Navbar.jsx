import React from 'react'
import Darkmode from './Darkmode/Darkmode'
import Langue from './Langues/Langue'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                <h3>CitizenContent</h3></div>      
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Acceuil</li>
                    <li> Nos Services</li>
                    <li>A propos</li>
                    <li>Partenaires</li>
                    {/* <span><Langue></Langue></span> */}
                    <span><Darkmode></Darkmode></span>
                   
                </ul>
            </div>
        
        </div>
    </div>   
  )
}

export default Navbar
