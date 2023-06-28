
import React from 'react';
import vab from '../resources/sandy_headshot.jpg';

const FeatureSplitRight = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'rgba(242,242,242,1)'
    }}>
      <div style={{
        flex: '50%',
        height: '600px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        <img 
          src={vab} 
          alt="Sandy's Picture"
          style={{
            borderRadius: '5%',
            height: '700px',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            maxWidth: '100%'
          }} 
        />
      </div>

      <div style={{
        flex: '50%',
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h1 style={{fontSize: 'clamp(20px, 2.5vw, 30px)', fontWeight: '700', marginBottom: '1rem'}}>
          Meet Brain Buffs
        </h1>
        <p style={{fontSize: 'clamp(14px, 2vw, 20px)', paddingRight:'5%'}}>
        Sandy is a dynamic student double majoring in Economics and Philosophy at the University of Colorado Boulder who brings a unique approach to SAT tutoring. His diverse experiences have endowed him with a strong ability to adapt and refined problem-solving skills. Notably, Sandy's hard work and determination were proven on the basketball court, where he achieved 1st Team All-Conference honors at D’Evelyn High School. He channels this same commitment into helping students excel on the SAT, utilizing his robust analytical skills and logical reasoning. His passion for education, coupled with an unwavering dedication to student success, makes Sandy a perfect guide for students striving to reach their full SAT potential
        </p>
      </div>
    </div>
  );
}

export default FeatureSplitRight;

