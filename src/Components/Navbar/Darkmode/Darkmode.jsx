import React, { useEffect } from 'react'
import './Darkmode.css'

const Darkmode = () => {
 
 
  const darkMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'dark');
  };

  const lightMode = () => {
    document.querySelector('body').setAttribute('data-theme', 'light');
  };


  const toggle = (e) => {
    if (e.target.checked) {
      darkMode();
    } else {
      lightMode();
    }
  };
 
  return (
    <>
          <input type="checkbox" id="check" onClick={toggle } />
          <label htmlFor="check" className="button button-dark"></label>
        </>
  )
}

export default Darkmode
