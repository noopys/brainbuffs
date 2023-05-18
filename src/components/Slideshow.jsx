import React, { useState, useEffect } from 'react';

const Slideshow = ({ component1, component2, interval }) => {
  const [activeComponent, setActiveComponent] = useState(component1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveComponent((prevComponent) =>
        prevComponent === component1 ? component2 : component1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [component1, component2, interval]);

  return <div>{activeComponent}</div>;
};

export default Slideshow;
