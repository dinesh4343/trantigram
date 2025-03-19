import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Css/Features.css';
import './Css/Translator.css';
import Header from './Header';
import Gif from './Gif';
import Features from './Features';
import Translator from './Translator';


function App() {
  return (
    <div className="App">
    
  
      <div className='Header' id='Header'>
      <Header />
      
      </div>
      
      <div className='Gif'>
      <Gif />
      </div>

      <div className='Features' id='Features'>
      <Features />
      
      </div>
    
      <div className='Translator' id='Translator'>
      <Translator />
      </div>
 

    </div>

    
  );
}

export default App;
