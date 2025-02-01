"use client";

import React from 'react';
import { useTranslation } from 'react-i18next';


function LanguageSelector() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string | undefined) => {
    i18n.changeLanguage(lng);
  };

  const buttonStyle = (language: string) => ({
    fontWeight: i18n.language === language ? 'bold' : 'normal',
    border: i18n.language === language ? '2px solid #fff' : 'none',
    margin: '0 5px',
    padding: '8px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    color: '#fff',
    transition: 'all 0.3s ease'
  });

  return (
    <div className="language-switcher" aria-label="Seletor de idiomas">
      <button 
        onClick={() => changeLanguage('pt')}
        style={buttonStyle('pt')}
        aria-label="Mudar para português"
      >
        🇧🇷 Português
      </button>
      <button
        onClick={() => changeLanguage('en')}
        style={buttonStyle('en')}
        aria-label="Change to English"
      >
        🇺🇸 English
      </button>
    </div>
  );
}

export default LanguageSelector;
