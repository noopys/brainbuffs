import React from 'react';

const Pricing = () => {
  const pricingBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '30px',
    margin: '50px',
    width: '300px',
    height: '400px', // Increase vertical size
    textAlign: 'center',
    backgroundColor: '#f9f9f9', // Add background color
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)', // Add box shadow
  };

  const listItemStyle = {
    textAlign: 'left',
  };


  const packageData = [
    {
      name: 'Buffs Basic',
      price: '$399',
      features: ['4 Personalized once-a-week tutoring sessions', 'Weekly custom homework tailored specifically to you', 'Any time support from BrainBuffs tutors to help with any questions or concerns'],
    },
    {
      name: 'Buffs Plus',
      price: '$699',
      features: ['8 Personalized twice-a-week tutoring sessions', 'Weekly custom homework tailored specifically to you', 'Any time support from BrainBuffs tutors to help with any questions or concerns'],
    },
  ];

  return (
      <div style={{
        display: 'flex',
        justifyContent:'center',
        //alignItems: 'center',
        height: '100vh',
        padding: '0',
        margin: '0',
        backgroundColor:"rgba(242,242,242,1)",
      }}
      >
          <div style={{
              display: 'flex',
              justifyContent: 'space-around',

              width: '65%',
          }}>
              {packageData.map((pkg, index) => (
                  <div key={index} style={pricingBoxStyle}>
                      <h2>{pkg.name}</h2>
                      <h3>{pkg.price}</h3>
                      <ul>
                          {pkg.features.map((feature, index) => (
                              <li style={listItemStyle} key={index}>{feature}</li>
                          ))}
                      </ul>
                  </div>
              ))}
          </div>
      </div>
  );
};

export default Pricing;