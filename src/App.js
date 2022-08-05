import React, {useState, useEffect} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

import LanguageSet from './components/language-set/LanguageSet';
import CommandButton from './components/command-button/CommandButton';

import { commandsEN, commandsES, commandsIT } from './commands';

import './App.css';


function App() {

  const [language, setLanguage] = useState('en-US')
  const [commands, setCommands] = useState(commandsEN)

  const {
    browserSupportsSpeechRecognition,
    listening
  } = useSpeechRecognition({ commands })

  useEffect(() => {
    switch (language) {
      case 'en-US':
        setCommands(commandsEN)
        break;
      case 'es-MX':
        setCommands(commandsES)
        break;
      case 'it-IT':
        setCommands(commandsIT)
        break;

      default:
        break;
    }
  }, [language])


  const start = () => {
    SpeechRecognition.startListening({
      continuous: true,
      language: language
    })
  }

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  

  return (
    <>
      <div className='container' id='container'>
      
        <h1 className='container__title'>COCO</h1>
        
        <CommandButton
          speechRecognition={SpeechRecognition}
          listening={listening}
          start={start}
        />
      
        <LanguageSet
          language={language}
          setLanguage={setLanguage}
        />
          
      </div>
      
    </>
  );
}

export default App;
