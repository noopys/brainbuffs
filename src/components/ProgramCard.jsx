import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function ProgramCard({ title, bullets, imageUrl, price }) {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "", // Assuming name will remain empty in this context
    email: "",
    message: "" // Assuming message will remain empty in this context
  });
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiEndpoint = 'https://hat4m94c1j.execute-api.us-east-2.amazonaws.com/Prod/send-email';
    const response = await fetch(apiEndpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    });

    // For development purposes
    if (1) {
      console.log('Message sent successfully!');
      setIsMessageSent(true);
      handleCloseModal();
    } else {
      console.log('There was an error sending the message.');
    }
  };

  return (
    <div className="card mb-4 shadow-sm h-100 bg-white" style={{ borderRadius: '15px', backgroundColor:'white' }}>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-2" style={{ fontWeight: '600', fontSize: "25px" }}>{title}</h5>
        <ul className="mb-0" style={{ fontSize: '17px', lineHeight: '1.4', textAlign: 'left', marginBottom: "0px" }}>
          {bullets.map((bullet, index) => (
            <li key={index}>{bullet}</li>
          ))}
        </ul>

        {/* Container for Price and Sign Up button */}
        <div className="mt-auto">
          <div className="text-center font-weight-bold mb-0" style={{ fontSize: "30px", fontWeight: "800" }}>{price}</div>
          <Button variant="primary" onClick={handleShowModal} className="mx-auto d-block" style={{ transition: 'all 0.3s', borderRadius: '8px', width: '30%' }}>Learn More</Button>
        </div>
      </div>




      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Learn More</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isMessageSent ? (
            <div className="alert alert-success font-weight-bold">Message Sent!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label>Enter your email and one of our tutors will get in contact with you within a few hours for a free consultation:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-control mt-2"
                  placeholder="Enter your email"
                />
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <Button type="submit" variant="primary" className="mt-3">
                  Submit
                </Button>
              </div>



            </form>
          )}
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
