import React, { useState, useEffect } from 'react';

const Slideshow = ({ component1, component2 }) => {
  const [activeComponent, setActiveComponent] = useState(component1);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToNextSlide = () => {
    setActiveComponent(activeComponent === component1 ? component2 : component1);
  };

  const goToPreviousSlide = () => {
    setActiveComponent(activeComponent === component1 ? component2 : component1);
  };

  const baseButtonStyle = {
    fontSize: '60px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    padding: '0',
    outline: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'opacity 0.3s' 
  };

  const buttonStyle = isMobile 
    ? { ...baseButtonStyle, position: 'absolute', bottom: '10px' }
    : { ...baseButtonStyle, position: 'absolute', top: '50%', transform: 'translateY(-50%)' };

  const leftArrowStyle = {
    position: 'relative',
    top: '-8%',
    right: '3%'
  };

  const rightArrowStyle = {
    position: 'relative',
    top: '-8%',
    right: '-3%'
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div>{activeComponent}</div>
      <button
        style={isMobile ? { ...buttonStyle, left: '10px' } : { ...buttonStyle, left: '10px' }}
        onClick={goToPreviousSlide}
        onMouseOver={e => e.target.style.opacity = '0.7'}
        onMouseOut={e => e.target.style.opacity = '1'}
      >
        <div style={leftArrowStyle}>&#8249;</div>
      </button>
      <button
        style={isMobile ? { ...buttonStyle, right: '10px' } : { ...buttonStyle, right: '10px' }}
        onClick={goToNextSlide}
        onMouseOver={e => e.target.style.opacity = '0.7'}
        onMouseOut={e => e.target.style.opacity = '1'}
      >
        <div style={rightArrowStyle}>&#8250;</div>
      </button>
    </div>
  );
};

export default Slideshow;
