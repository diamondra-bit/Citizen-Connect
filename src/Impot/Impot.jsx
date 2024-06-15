import React, { useState } from 'react'
import Footer from '../Components/Footer/Footer'
import { use } from 'i18next'

const Impot = () => {
  const [inputs, setInputs] = useState({
    revenus: '',
    charges_deductibles: '',
    depenses_deductibles: '',
    credits_impot: '',
    situation_familiale: '',
    nombre_enfants: ''
  });
  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));

    console.log({name, value})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const revenus = inputs.revenus.split(',').map(Number);
    const charges_deductibles = inputs.charges_deductibles.split(',').map(Number);
    const depenses_deductibles = inputs.depenses_deductibles.split(',').map(Number);
    const credits_impot = inputs.credits_impot.split(',').map(Number);
    const situation_familiale = inputs.situation_familiale;
    const nombre_enfants = Number(inputs.nombre_enfants);

    console.log("eto"+charges_deductibles)
    setResult(  calculerImpot(revenus, charges_deductibles, depenses_deductibles, credits_impot, situation_familiale, nombre_enfants))
console.log('Impôt à payer :', result)

  }
  function calculerImpot(revenus, chargesDeductibles, depensesDeductibles, creditsImpot, situationFamiliale, nombreEnfants) {
  
    let revenuNetImposable = revenus - chargesDeductibles - depensesDeductibles;

    let nombreParts = 1; 
    if (situationFamiliale === 'célibataire') {
        nombreParts = 1;
    } else if (situationFamiliale === 'marié' || situationFamiliale === 'pacsé') {
        nombreParts = 2;
    }

    nombreParts += nombreEnfants * 0.5;


    const tranches = [
        { limite: 10777, taux: 0 },
        { limite: 27478, taux: 0.11 },
        { limite: 78570, taux: 0.30 },
        { limite: 168994, taux: 0.41 },
        { limite: Infinity, taux: 0.45 }
    ];

    let impotTotal = 0;
    let revenuRestant = revenuImposableParPart;

    for (let i = 0; i < tranches.length; i++) {
        if (revenuRestant <= 0) {
            break;
        }
        let tranche = tranches[i];
        let trancheImpot = 0;

        if (revenuRestant > tranche.limite) {
            trancheImpot = (tranche.limite - 0) * tranche.taux;
            revenuRestant -= (tranche.limite - 0);
        } else {
            trancheImpot = revenuRestant * tranche.taux;
            revenuRestant = 0;
        }

        impotTotal += trancheImpot;
    }

    impotTotal *= nombreParts;

    impotTotal -= creditsImpot;

    return impotTotal;
}
  return (
    <div className="dark">
    <div className="main">
      <div className="container-main">
      <div className="blur s-blur" ></div>
      
      <div className="row row-cols-1 row-cols-md-2 g-4">
    <div className="pt-5">
    <h1 className='text-center'>Declaration d'impot</h1>

      <div className="col">
    <div className="card horizontal-card">
       <form onSubmit={handleSubmit}>
               
                <div class="col-input mb-3 d-flex align-items-center">
                  <p class="mb-0 mr-2">Votre revenu salarial :</p>
                  <input type="text" name="revenus" value={inputs.revenus} onChange={handleChange} placeholder="Ex: 35000,5000" required class="form-control" id="name" />
                </div>
        <div  class="col-input mb-3 d-flex align-items-center">
          <label>Charges Déductibles :</label>
          <input type="text" name="charges_deductibles"  value={inputs.charges_deductibles} onChange={handleChange} placeholder="Ex: 3000" required class="form-control"/>
        </div>
        <div  class="col-input mb-3 d-flex align-items-center">
          <label>Dépenses Déductibles :</label>
          <input type="text"  name="depenses_deductibles"  value={inputs.depenses_deductibles}  onChange={handleChange}  placeholder="Ex: 1000"  required class="form-control" />
        </div>
        <div  class="col-input mb-3 d-flex align-items-center">
          <label>Crédits d'Impôt :</label>
          <input  type="text"  name="credits_impot"  value={inputs.credits_impot}  onChange={handleChange}  placeholder="Ex: 1500"  required class="form-control" />
        </div>
        <div  class="col-input mb-3 d-flex align-items-center">
          <label>Situation Familiale:</label>
          <select name="situation_familiale" value={inputs.situation_familiale} onChange={handleChange} required class="form-control">
            <option value="">Choisir...</option>
            <option value="célibataire">Célibataire</option>
            <option value="marié">Marié</option>
            <option value="PACS">PACS</option>
          </select>
        </div>
        <div  class="col-input mb-3 d-flex align-items-center">
          <label>Nombre d'Enfants:</label>
          <input  type="number"  name="nombre_enfants"  value={inputs.nombre_enfants}  onChange={handleChange}  placeholder="Ex: 1"  required class="form-control" />
        </div>
                <button type="submit" class="mt-5 btn-center">Calculer</button>
                
       </form>
       </div>
    </div>
      </div>

      <div >

        {result !== null && (
          <div style={{width:'169px',height:'27px'}}>
            <h3>Résultat</h3>
            <p>Impôt Net à Payer : {result.toFixed(2)} €</p>
          </div>
        )}

    </div>
    </div>
    
       < h1 className=" mb-5"></h1>
       <p className='mb-5'></p>
      </div>
  
      

      </div>
    
    <Footer/>
    </div>
  )
}

export default Impot
