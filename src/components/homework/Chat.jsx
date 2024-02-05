import React, { useState } from 'react';

const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChat = () => setIsChatOpen(!isChatOpen);

  const handleUserInput = (e) => setUserInput(e.target.value);

  const handleSendMessage = (e) => {
    e.preventDefault(); // Prevent the form from submitting in a traditional way
    if (!userInput.trim()) return;

    // Add user message to messages array
    setMessages([...messages, { sender: 'user', text: userInput }]);
    setUserInput(''); // Clear input field

    // Simulate a bot response
    setTimeout(() => {
      setMessages(messages => [...messages, { sender: 'bot', text: "This is a response from the chatbot." }]);
    }, 500);
  };

  return (
    <div> {/* Removed `fixed bottom-0 right-0` */}
      <button onClick={toggleChat} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
        AI Assisted Tutor
      </button>
      {isChatOpen && (
        <div className="mt-4 w-96"> {/* Adjusted positioning styles */}
          <div className="bg-white shadow-md rounded-lg max-w-lg w-full">
            <div className="p-4 border-b bg-blue-500 text-white rounded-t-lg flex justify-between items-center">
              <p className="text-lg font-semibold">Admin Bot</p>
              <button onClick={toggleChat} className="text-gray-300 hover:text-gray-400 focus:outline-none focus:text-gray-400">
                {/* Close icon */}
              </button>
            </div>
            <div className="p-4 h-80 overflow-y-auto">
              {/* Display messages */}
              {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : ''}`}>
                  <p className={`rounded-lg py-2 px-4 inline-block ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}>
                    {message.text}
                  </p>
                </div>
              ))}
            </div>
            <div className="p-4 border-t flex">
              <input
                type="text"
                value={userInput}
                onChange={handleUserInput}
                placeholder="Type a message"
                className="w-full px-3 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button onClick={handleSendMessage} className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
