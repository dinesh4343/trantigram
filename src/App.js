import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Css/Features.css';
import './Css/Translator.css';
import './Css/Footer.css';

import Header from './JS/Header';
import Gif from './JS/Gif';
import Features from './JS/Features';
import Translator from './JS/Translator';
import Footer from './JS/Footer';
import Top from './JS/Top';


function App() {
  return (
    <div className="App">
    
    <div className='Top'>
    <Top />
    </div>
    
  
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
      
      <div className='Footer'>
      <Footer />
      </div>
 

    </div>

    
  );
}

export default App;
