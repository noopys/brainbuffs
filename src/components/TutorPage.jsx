import React from 'react';
import vab from '../resources/loganvab.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

const TutorPage = ({description, image}) => {
  return (
    <div className="row bg-light" style={{ overflow: 'hidden' }}>
      <div className="col-md-6 d-flex align-items-center justify-content-center" style={{height: '100vh',overflowY: 'hidden' }}>
        <img 
          src={image} 
          alt="Picture"
          className="rounded w-65"  // Ensure the image takes up the full width of its container
          style={{ objectFit: 'cover', objectPosition: 'center', maxHeight: '100vh' }}
        />
      </div>

      <div className="col-md-6 d-flex flex-column justify-content-center p-3" style = {{overflowY:"hidden"}}>
        <h1 className="font-weight-bold mb-3" style={{fontSize: 'clamp(20px, 2.5vw, 30px)'}}>
          Meet The Founders
        </h1>
        <p style={{fontSize: 'clamp(14px, 2vw, 20px)', paddingRight: '5%'}}>{description}</p>
      </div>
    </div>
  );
}

export default TutorPage;
