import React from 'react';

//Pricing page shows prices of all services 
const Pricing = () => {
  const pricingBoxStyle = {
    border: '1px solid #ddd',
    borderRadius: '20px',
    padding: '30px',
    margin: '20px',
    width: '100%',
    maxWidth: '300px',
    textAlign: 'center',
    backgroundColor: 'white',
    boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.1)',
    transition: 'all 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0px 12px 20px 0px rgba(0,0,0,0.2)',
    },
    '@media (max-width: 600px)': {
      maxWidth: '100%',
      margin: '20px 0',
    },
  };

  const titleStyle = {
    margin: '10px 0',
    color: '#333',
    fontSize: '24px',
  };

  const priceStyle = {
    margin: '15px 0',
    color: '#FF5722',  // Orange color for price to make it pop
    fontSize: '30px',
    fontWeight: 'bold',
  };

  const listItemStyle = {
    textAlign: 'left',
    fontSize: '16px',
    padding: '10px 0',
  };

  const packageData = [
    {
      name: 'Buffs Basic',
      price: '$200',
      features: [
        '4 Personalized once-a-week tutoring sessions',
        'Weekly homework created by our custom software program using AI to give you personalized questions',
        'Anytime support from BrainBuffs tutors to help with any questions or concerns',
      ],
    },
    {
      name: 'Buffs Plus',
      price: '$400',
      features: [
        '8 Personalized tutoring sessions',
        'Weekly homework created by our custom software program using AI to give you personalized questions',
        'Anytime support from BrainBuffs tutors to help with any questions or concerns',
      ],
    },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
      padding: '50px 0',
      margin: '0',
      backgroundColor: "rgba(242,242,242,1)",
    }}>
      {packageData.map((pkg, index) => (
        <div key={index} style={pricingBoxStyle}>
          <h2 style={titleStyle}>{pkg.name}</h2>
          <p style={priceStyle}>{pkg.price}</p>
          <ul>
            {pkg.features.map((feature, index) => (
              <li style={listItemStyle} key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
