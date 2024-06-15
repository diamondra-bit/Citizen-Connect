import React from 'react'
import Navbar from'../Components/Navbar/Navbar'
import Intro from '../Components/Intro/Intro'
import About from '../Components/About/About'
import Service from '../Components/Service/Service'
import Footer from '../Components/Footer/Footer'
import Partenaire from '../Components/Partenaires/Partenaire'
import './Home.css'
import Chatbot from '../Components/ChatBoat/chatbot'

const Home = () => {
  return (
    <div className="dark">
    <div className="main">
      <div className="container-main">
      <div className="blur s-blur" ></div>
      <div className="blur s-blur2" style={{}}></div>
      
      <Navbar/>
       <Intro/>
       <Service/>
       <About/>
       <Partenaire></Partenaire>
       <Chatbot/>

      </div>
    </div>

    <Footer/>
    </div>
  )
}

export default Home
