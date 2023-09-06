const emailjs = require('emailjs-com');

exports.handler = async (event) => {
  const formData = JSON.parse(event.body);
  // send an email using EmailJS
  const result = await emailjs.send('service_l4hr615', 'template_g3quj36', formData, '3vZQ7RjamoF3fqPFx')
    .then((result) => {
        return {
          statusCode: 200,
          body: result.text,
        };
    }, (error) => {
        return {
          statusCode: 501,
          body: error.text,
        };
    });
  
  return result;
};
