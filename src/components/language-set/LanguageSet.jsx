import React from 'react';

import us from '../../assets/icons/US.png';
import mx from '../../assets/icons/MX.png';
import it from '../../assets/icons/IT.png';

import './LanguageSet.css';

const LanguageSet = ({ language, setLanguage }) => {
  return (
    <div className='language-set'>
      <p className='language-set__text'>{language}</p>
      <div className='language-set__wrapper'>
        <button onClick={() => setLanguage('it-IT')}>
          <img
            src={it}
            alt='italian flag'
          />
        </button>
        <button onClick={() => setLanguage('es-MX')}>
          <img
            src={mx}
            alt='mexican flag'
          />
        </button>
        <button onClick={() => setLanguage('en-US')}>
          <img
            src={us}
            alt='united states flag'
          />
        </button>
      </div>
    </div>
  );
};

export default LanguageSet;
