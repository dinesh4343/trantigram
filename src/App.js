import React from 'react';
import './App.css';
import './Css/Features.css';
import Header from './Header';
import Gif from './Gif';
import Features from './Features';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
    
  
      <div className='Header'>
      <Header />
      
      </div>
      
      <div className='Gif'>
      <Gif />
      </div>

      <div className='Features'>
      <Features />
      </div>
  

  




    </div>


    
  );
}

export default App;
