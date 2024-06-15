import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from'axios'
import CubeAnimated from '../CubeAnimé/CubeAnimated'
import './Login.css'

const Login = () => {
  const[id,setId]=useState("");
  const[mdp,setMdp]=useState("");
  
  const navigate=useNavigate();

   const handleAdd=(e)=>{
        axios.get(`http://localhost:3003/login/${id}`)
        .then((result)=>{
            if(result.data.length>0){
                if(mdp===result.data[0].mdp){
                  localStorage.setItem('userId', id.toString());

                  const storedId = localStorage.getItem('userId');
                  console.log("Stored User ID:", storedId);

                  console.log("OK")
                    navigate("/")
                }
   }})
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
                  <label for="name" class="form-label">Nom</label>
                  <input type="text" required class="form-control" id="name"  placeholder="Entrez votre nom"/>
                </div>
                <div class="mb-3">
                  <label for="name" class="form-label">Prénom</label>
                  <input type="text" required class="form-control" id="name"  placeholder="Entrez votre prénom"/>
                </div>
                <div class="mb-3">
                  <label for="text" class="form-label">CIN</label>
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setId(e.target.value)}} placeholder="Entrez votre numéro CIN"/>
                </div>
                <div class="mb-3">
                  <label for="text" class="form-label">Mot de passe</label>
                  <input type="password" required class="form-control" id="text" onChange={(e)=>{setMdp(e.target.value)}} placeholder="Entrez votre mot de passe"/>
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

export default Login
