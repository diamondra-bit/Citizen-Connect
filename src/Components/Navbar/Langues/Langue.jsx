import React, { useState, useEffect } from 'react';
import french from './french.svg'; 
import usa from './usa.svg';
import './Langues.css';
import { useTranslation } from 'react-i18next';

const Langue = ({ show, setShow, lng }) => {
  const { t, i18n } = useTranslation();
  const [showlng, setShowlng] = useState(true); 
  const [currentLang, setCurrentLang] = useState('fr'); 

  useEffect(() => {
    const savedLang = localStorage.getItem('selectedLang') || 'fr'; 
    setCurrentLang(savedLang);
  }, []); 

  const handleLangChange = (event) => {
    const selectedLang = event.target.value;
    setCurrentLang(selectedLang); 
    localStorage.setItem('selectedLang', selectedLang); 
    setShowlng(!showlng); 
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className='div-select'>
      <select onChange={handleLangChange} value={currentLang}>
        <option value='fr'>FR</option>
        <option value='en'>MLG</option>
      </select>
    </div>
  );
};

export default Langue;
