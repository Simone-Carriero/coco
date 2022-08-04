import React from 'react'

import us from '../assets/icons/US.png'
import mx from '../assets/icons/MX.png'
import it from '../assets/icons/IT.png'

import './LanguageSet.css'

const LanguageSet = () => {

  return (
    <div className="language-set">
      <p className='language-set__text'>{'en-US'}</p>
      <div className='language-set__wrapper'>
        <img src={it} alt="italian flag" />
        <img src={mx} alt="mexican flag" />
        <img src={us} alt="united states flag" />
      </div>
    </div>
  )
}

export default LanguageSet 