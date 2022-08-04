import React from 'react'

import us from '../assets/icons/US.png'
import mx from '../assets/icons/MX.png'
import it from '../assets/icons/IT.png'

import './LanguageSet.css'

const LanguageSet = ({ language, setLanguage }) => {

  return (
    <div className="language-set">
      <p className='language-set__text'>{language}</p>
      <div className='language-set__wrapper'>
        <img src={it} alt="italian flag" onClick={() => setLanguage('it-IT')} />
        <img src={mx} alt="mexican flag" onClick={() => setLanguage('es-MX')} />
        <img src={us} alt="united states flag" onClick={() => setLanguage('en-US')} />
      </div>
    </div>
  )
}

export default LanguageSet 