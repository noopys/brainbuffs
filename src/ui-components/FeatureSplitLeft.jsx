import React from 'react';
import vab from '../resources/loganvab.jpg';

const FeatureSplitLeft = () => {
  const isMobile = window.innerWidth <= 600;

  const containerStyle = {
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    width: '100%',
    backgroundColor: 'rgba(242,242,242,1)'
  };

  const imageContainerStyle = {
    flex: '50%',
    height: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  };

  const imageStyle = {
    borderRadius: '5%',
    height: '100vh',
    objectFit: 'cover',
    objectPosition: 'center',
    width: '40',
    maxWidth: '100%'
  };

  const textContainerStyle = {
    flex: isMobile ? '100%' : '50%',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  return (
    <div style={containerStyle}>
      <div style={imageContainerStyle}>
        <img 
          src={vab} 
          alt="Logan's Picture"
          style={imageStyle}
        />
      </div>

      <div style={textContainerStyle}>
        <h1 style={{fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: '700', marginBottom: '1rem'}}>
          Meet Brain Buffs
        </h1>
        <p style={{fontSize: 'clamp(14px, 2vw, 20px)', paddingRight:'5%'}}>
          Logan is a motivated computer science student and National Merit Scholar with a background 
          as a NASA intern, who excelled on the SAT and is now dedicated to helping others achieve 
          the same success. Logan understands firsthand the strategies and techniques needed to excel in 
          each section. Combined with his strong problem-solving, logical reasoning, and analytical skills, 
          he brings a unique perspective to his tutoring approach. Logan provides students with the tools 
          and guidance they need to achieve their own exceptional SAT scores. With his passion and 
          expertise, Logan is committed to empowering students to reach their full potential on the SAT.
        </p>
      </div>
    </div>
  );
}

export default FeatureSplitLeft;
