import React, { useState } from 'react';

const Slideshow = ({ component1, component2 }) => {
  const [activeComponent, setActiveComponent] = useState(component1);

  const goToNextSlide = () => {
    setActiveComponent(activeComponent === component1 ? component2 : component1);
  };

  const goToPreviousSlide = () => {
    setActiveComponent(activeComponent === component1 ? component2 : component1);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div>{activeComponent}</div>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          fontSize: '32px',
        }}
        onClick={goToPreviousSlide}
      >
        &#8249;
      </button>
      <button
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          fontSize: '32px',
        }}
        onClick={goToNextSlide}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Slideshow;
