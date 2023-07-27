import React from 'react';
import vab from '../resources/sandy_headshot.jpg';

const FeatureSplitRight = () => {
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
    height: isMobile ? '100vh' : '700px',
    objectFit: 'cover',
    objectPosition: 'center',
    width: '100%',
    maxWidth: isMobile ? '90%' : '60%'
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
          alt="Sandy's Picture"
          style={imageStyle}
        />
      </div>

      <div style={textContainerStyle}>
        <h1 style={{fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: '700', marginBottom: '1rem'}}>
          Meet Brain Buffs
        </h1>
        <p style={{fontSize: 'clamp(14px, 2vw, 20px)', paddingRight:'5%'}}>
          Sandy is a dynamic student double majoring in Economics and Philosophy at the University of 
          Colorado Boulder who brings a unique approach to SAT tutoring. His diverse experiences have 
          endowed him with a strong ability to adapt and refined problem-solving skills. Notably, Sandy's 
          hard work and determination were proven on the basketball court, where he achieved 1st Team 
          All-Conference honors at D’Evelyn High School. He channels this same commitment into helping 
          students excel on the SAT, utilizing his robust analytical skills and logical reasoning. His 
          passion for education, coupled with an unwavering dedication to student success, makes Sandy a 
          perfect guide for students looking boost their scores.
        </p>
      </div>
    </div>
  );
}

export default FeatureSplitRight;
