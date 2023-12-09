import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

const Slideshow = ({ component1, component2, component3 }) => {
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
    if (activeComponent === component1) {
      setActiveComponent(component2);
    } else if (activeComponent === component2) {
      setActiveComponent(component3);
    } else {
      setActiveComponent(component1);
    }
  };

  const goToPreviousSlide = () => {
    if (activeComponent === component1) {
      setActiveComponent(component3);
    } else if (activeComponent === component2) {
      setActiveComponent(component1);
    } else {
      setActiveComponent(component2);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center p-3 bg-light min" style={{  }}>
      <div>{activeComponent}</div>
      <button
        className={`btn btn-dark rounded-circle position-absolute translate-middle ${isMobile ? 'bottom-0 mb-2' : 'top-50'}`}
        style={{ width: '50px', height: '50px', left: 'calc(0%  + 25px)'}}
        onClick={goToPreviousSlide}
      >
        <i className="bi bi-arrow-left" ></i>
      </button>
      <button
        className={`btn btn-dark rounded-circle position-absolute translate-middle ${isMobile ? 'bottom-0 mb-2' : 'top-50'}`}
        style={{ width: '50px', height: '50px', right: 'calc(0% - 20px)' }}
        onClick={goToNextSlide}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default Slideshow;
