import React, {useState, useEffect} from 'react'
import './acte.css'
import Footer from '../Components/Footer/Footer'
import ActeNaissPdf from './acteNaissPdf'
import axios from 'axios'
import ActeDeMariagePdf from './acteMariagePdf'
import ActeDecesPdf from './acteDecesPdf'


const acte = () => {
  ////////////////////////////////////////////////
  const [pere, setPere] = useState("");
  const [mere, setMere] = useState("");
  const [profPere, setProfPere] = useState("");
  const [profMere, setProfMere] = useState("");
  const [user, setUser] = useState({});
  const [date, setDate] = useState(null);

  const [storedId, setStoredId] = useState('');
  useEffect(() => {
      const storedUserId = localStorage.getItem('userId');
      if (storedUserId) {
          setStoredId(storedUserId);
      }
  }, [storedId]);

  const getUser = () => {
    axios.get('http://localhost:3000/getUser/get/user/' + storedId)
    .then((result) => {
        setUser(result.data)
        console.log(user);
        const formattedDate = format(new Date(user[0]?.date_nais), 'yyyy/MM/dd');
        setDate(formattedDate)
    })
}

useEffect(() => {
    getUser();
})
  ///////////////////////////////////////////////

  const [nomH , setNomH] = useState("");
    const [nomF , setNomF] = useState("");
    const [prenomH , setPrenomH] = useState("");
    const [prenomF , setPrnomF] = useState("");
    const [lieu , setLieu] = useState("");
    const [date_mariage , setDateMariage] = useState(null);
    const [cinH , setCinH] = useState("");
    const [cinF , setCinF] = useState("");

    

///////////////////////////////////////////////////

const [nomDeces, setNomDeces] = useState("");
    const [prenomDeces, setPrenomDeces] = useState("");
    
    const [adresse, setAdresse] = useState("");
    const [dateDeces, setDateDeces] = useState("");
    const [lieuDeces, setLieuDeces] = useState("");

/////////////////////////////////////////////////

  return (
    <div className="dark">
    <div className="main">
      <div className="container-main">
      <div className="blur s-blur" ></div>
      
      <div className="pt-5">
      <h1 className='text-center'>Actes d'état civil</h1>
      <div className="row row-cols-1 row-cols-md-3 mt-5 mb-5 mb-1 g-4">
    <div className="col">
    <div className="card horizontal-card">
       <h3 className='btn-center'>Acte de Naissance</h3>
       <form >
                <div class="col-input mb-3">
                   <input type="text" required class="form-control" id="father"  placeholder="Entrez nom du père" onChange={(e) => setPere(e.target.value)}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="mother"  placeholder="Entrez nom de la mère" onChange={(e) => setMere(e.target.value)}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="profPere"  placeholder="Entrez profession du père " onChange={(e) => setProfPere(e.target.value)}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setProfMere(e.target.value)}} placeholder="Entrez profession de la mère"/>
                </div>
                <div class="col-input mb-3">
                  <input type="date" required class="form-control" id="text" onChange={(e)=>{setDate(e.target.value)}} placeholder="Entrez profession de la mère"/>
                </div>
                
                {user && (
                <ActeNaissPdf 
                    lieu_naiss={user[0]?.lieu_nais} 
                    nom={user[0]?.nom} 
                    prenom={user[0]?.prenom} 
                    date_nais={date} 
                    pere={pere} 
                    mere={mere} 
                    profPere={profPere} 
                    profMere={profMere}
                />
            )}
       </form>
       </div>
    </div>

    <div className="col">
      <div className="card horizontal-card">
        <h3 className='btn-center'>Acte de mariage</h3>
       <form >
                <div class="col-input mb-3">
                   <input type="text" required class="form-control" id="name"  placeholder="Entrez nom du mari" onChange={(e) => {setNomH(e.target.value)}}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="name"  placeholder="Entrez prénom du mari" onChange={(e) => {setPrenomH(e.target.value)}}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setCinH(e.target.value)}} placeholder="Entrez CIN du mari"/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setNomF(e.target.value)}} placeholder="Entrez nom de la femme"/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setPrnomF(e.target.value)}} placeholder="Entrez prénom de la femme"/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setCinF(e.target.value)}} placeholder="Entrez CIN de la femme"/>
                </div>
                <div class="col-input mb-3">
                  <input type="date" required class="form-control" id="text" onChange={(e)=>{setDateMariage(e.target.value)}} placeholder="Entrez date du mariage"/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setLieu(e.target.value)}} placeholder="Entrez lieu du mariage"/>
                </div>
                
                <ActeDeMariagePdf 
                  nomH = {nomH}
                  nomF = {nomF}
                  prenomH = {prenomH}
                  prenomF = {prenomF}
                  cinH = {cinH}
                  cinF = {cinF}
                  date = {date_mariage}
                  lieu = {lieu}
                />
       </form>
        </div>
    </div>

    <div className="col">
      <div className="card horizontal-card">
        <h3 className='btn-center'>Acte de décès</h3>
        <form >
                <div class="col-input mb-3">
                   <input type="text" required class="form-control" id="name"  placeholder="Entrez nom" onChange={(e) => {setNomDeces(e.target.value)}}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="name"  placeholder="Entrez  prénom" onChange={(e) => {setPrenomDeces(e.target.value)}}/>
                </div>
                <div class="col-input mb-3">
                  <input type="text" required class="form-control" id="text" onChange={(e)=>{setAdresse(e.target.value)}} placeholder="Entrez adresse"/>
                </div>
                <div class="col-input mb-3">
                  <input type="date" required class="form-control" id="text" onChange={(e)=>{setDateDeces(e.target.value)}} placeholder="Entrez date de la mort"/>
                </div>
                <div class="col-input mb-3">
                <input type="text" required class="form-control" id="text" onChange={(e)=>{setLieuDeces(e.target.value)}} placeholder="Entrez lieu de la mort"/>
              </div>


              <ActeDecesPdf
                nom={nomDeces}
                prenom={prenomDeces}
                adresse={adresse}
                date={dateDeces}
                lieu={lieuDeces}
            />
                
       </form>
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

export default acte
