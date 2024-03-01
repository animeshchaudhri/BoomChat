import React, { useState } from 'react';
import "./Chat2.css";

const Chatbox = () => {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const roomName = "12345";
    const users = ["User 1", "User 2", "User 3"];

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        if (message.trim() !== '') {
            setChatHistory([...chatHistory, message]);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="left-container">
                {/* Room Name */}
                <h2>{roomName}</h2>

                {/* Users */}
                <ul>
                    {users.map((user, index) => (
                        <li key={index}>{user}</li>
                    ))}
                </ul>
            </div>

            <div className="right-container">
                {/* Chat */}
                <div className="chat-history">
                    {chatHistory.map((msg, index) => (
                        <div key={index}>{msg}</div>
                    ))}
                </div>

                {/* Text Input */}
                <div className="text-input">
                    <input
                        type="text"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="Type your message..."
                    />
                    <button onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    );
};

export default Chatbox;