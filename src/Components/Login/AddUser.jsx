import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import axios from'axios'
import CubeAnimated from '../CubeAnimé/CubeAnimated'


const AddUser = () => {
    const[id,setId]=useState("");
    const[nom,setNom]=useState('');
    const[prenom,setPrenom]=useState('');
    const[mdp,setMdp]=useState("");
    
    const navigate=useNavigate();

   const handleAdd=(e)=>{
      e.preventDefault();
        axios.post(`http://localhost:3003/insertUserCitizen`,{
            nom:nom,prenom:prenom,mdp:mdp
        })
        .then((result)=>{
            navigate("/")        
        })
 }
  return (
    <div className='login'>
         <div class="row ">
         <div class="col-md-5 cube">
          <div class="card border-0 ">
            <CubeAnimated></CubeAnimated>
          </div>
        </div>
        <div class="col-md-7 ">
          <div class="card border-0">
          
          <div class="row justify-content-center ">
        <div class="col-md-7 right">
          <div class="card mt-5 border-1">
            <div class="card-body ">
              <h5 class="card-title text-center h5">Se Connecter</h5>
              <form onSubmit={handleAdd}>
                <div class="mb-3">
        
                  <input type="text" required class="form-control"  onChange={(e)=>{setNom(e.target.value)}}  placeholder="Entrez votre nom"/>
                </div>
                <div class="mb-3">
                  <input type="text" required class="form-control"   onChange={(e)=>{setPrenom(e.target.value)}} placeholder="Entrez votre prénom"/>
                </div>
                <div class="mb-3">
                  <input type="text" required class="form-control"  onChange={(e)=>{setId(e.target.value)}} placeholder="Entrez votre numéro CIN"/>
                </div>
                <div class="mb-3">
                   <input type="password" required class="form-control"  onChange={(e)=>{setMdp(e.target.value)}} placeholder="Entrez votre mot de passe"/>
                </div>
              
                <button type="submit" class=" btn-center">Envoyer</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

            </div>
          </div>
        </div>
  )
}

export default AddUser
