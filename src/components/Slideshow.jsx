import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Bootstrap Icons

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

  return (
    <div className="position-relative w-100 h-100" stlye = {{overflow:"hidden"}}>
      <div>{activeComponent}</div>
      <button
        className={`btn btn-dark rounded-circle position-absolute translate-middle ${isMobile ? 'bottom-0 mb-2' : 'top-50'}`}
        style={{ width: '50px', height: '50px', left: 'calc(0%  + 25px)' }} // Adjusted here
        onClick={goToPreviousSlide}
      >
        <i className="bi bi-arrow-left"></i>
      </button>
      <button
        className={`btn btn-dark rounded-circle position-absolute translate-middle ${isMobile ? 'bottom-0 mb-2' : 'top-50'}`}
        style={{ width: '50px', height: '50px', right: 'calc(0% - 20px)' }} // Adjusted here
        onClick={goToNextSlide}
      >
        <i className="bi bi-arrow-right"></i>
      </button>
    </div>
  );
};

export default Slideshow;
