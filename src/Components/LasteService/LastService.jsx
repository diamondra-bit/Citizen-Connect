import React from 'react'
import {Link} from 'react-router-dom'
import Footer from '../Footer/Footer'
import fkt from '/public/quartier.png'

const  LastService = () =>{
    return(
        <div className="dark">
    <div className="main">
      <div className="container-main">
      <div className="blur s-blur" ></div>
      
      <div className="pt-5">
      <div className="row row-cols-1 row-cols-md-3 mt-5 mb-5 mb-1 g-4">
    <div className="col" style={{ display : 'flex' , justifyContent : 'space-around', width : '100%'}}>
    <div className="card horizontal-card" >
       <h1>Services Communales</h1>

       <div class="col-input mb-3" >
       "Optimisez votre quotidien avec nos <br/>  services communaux : administration efficace, <br/> soutien social, et bien plus encore pour une <br/> vie locale harmonieuse !"
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                
    </div>

    <div className="card horizontal-card">
       <h1>Services Fonkontany</h1>

       <div class="col-input mb-3" >
       "Découvrez des services de proximité exceptionnels <br/> au cœur de votre quartier administratif, conçus <br/> pour simplifier votre quotidien et enrichir <br/> votre communauté."
                </div>
                <div class="col-input mb-3">
                 
                </div>
                <div class="col-input mb-3">
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                
    </div>
    <div className="card horizontal-card">
       <h1>Services fiscales</h1>

       <div class="col-input mb-3" style={{marginRight : '500px'}}>
       <br/> <br/>
       "Explorez notre service fiscal digitalisé, conçu <br/> pour simplifier et optimiser la gestion de vos <br/> obligations fiscales."
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                <div class="col-input mb-3">
                  
                </div>
                
    </div>
    </div>
      </div>
      </div>
    
      </div>
    </div>
    <Footer/>
    </div>
    )

}

export default LastService;