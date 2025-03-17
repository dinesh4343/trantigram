import React, { useState, useEffect } from 'react';
import { MoonStar, SunDim } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button 
      onClick={toggleTheme} 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100px',
        height: '40px',
        cursor: 'pointer',
        backgroundColor: theme === 'light' ? '#000' : '#D4ADFC',
        color: theme === 'light' ? '#fff' : '#000',
        border: '1px solid',
        borderRadius: '30px',
        transition: 'background-color 0.5s ease-in-out, color 0.5s ease-in-out',
        position: 'relative',
        overflow: 'hidden',
        
      }}
      
    >
      <motion.div
        key={theme}
        initial={{ x: theme === 'light' ? '100%' : '-100%' }}
        animate={{ x: theme === 'light' ? '0%' : '-50%' }}
        exit={{ x: theme === 'light' ? '100%' : '-100%' }}
        style={{
          position: 'absolute',
          left: theme === 'light' ? '5px' : 'calc(80%)',
          width: '30px',
          height: '30px',
          backgroundColor: theme === 'light' ? '#FFD700' : '#021526',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'left 0.10s ease-in-out',
        }}
      >
        {theme === 'light' ? <MoonStar size={18} color="#021526" /> : <SunDim size={18} color="#FEC260" />}
      </motion.div>
    </button>
  );
};

export default ThemeToggle;
