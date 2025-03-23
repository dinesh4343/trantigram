import React, { useState, useEffect } from 'react';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBIcon } from 'mdb-react-ui-kit';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <MDBBtn
        floating
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#261FB3',
          borderColor: '#261FB3',
          width: '50px',
          height: '50px',
          zIndex: 1000,
          borderRadius:'50%'
        }}
      >
        <MDBIcon fas icon="arrow-up" />
      </MDBBtn>
    )
  );
};

export default ScrollToTop;
