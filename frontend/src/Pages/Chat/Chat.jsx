import React, { useState, useEffect } from "react";
import { socket } from "../../main";
import { useParams } from "react-router-dom";
import "./Chat.css";
import Chatbox from "../../componets/Chatbox/Chatbox";


export default function Chat() {
  const { id } = useParams();
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");


  

 
 

  const handleSubmit = () => {
    socket.emit("getname", socket.id);
    
    socket.on("gotname", (data) => {
   setName(data)
    console.log("gotname",data);
    }
    );
    socket.emit("outgoingMessage", {
      message: message,
      room: id,
      name: name,
      
    });

    setChats(prevChats => [...prevChats, {
      action: "outgoing",
      message: message,
      name : name,
    }]);
    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };
  
  useEffect(() => {
    const handleIncomingMessage = (data) => {
      console.log("Incoming message:", data);
      setChats(prevChats => [...prevChats, {
        action: "incoming",
        message: data.message,
        name : data.name,
      }]);
      
    };

    socket.on("IncomingMessage", handleIncomingMessage);
 
    
  }, []);

  useEffect(() => {
    console.log("Chats updated:", chats);
    
  }, [chats]);
  
  useEffect(() => {
    socket.emit("getname",socket.id);
    console.log("getname",socket.id);
 
  socket.on("gotname", (data) => { 
    console.log(data)
     setName(data) });

  
  },[]);
 
  return (
    <div>
      <div className="chat-room">
        <Chatbox/>
        <h1>{id}</h1>
        
        <h2>{name}</h2>
        
        {chats.map((chat, index) => (
          <div key={index}>
            <p>{chat.name}</p>
            <p>{chat.message}</p>
          </div>
        ))}
      </div>
      <div className="message-box">
        <input
          type="text"
          placeholder="Type your message"
          value={message}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Send</button>
      </div>
    </div>
  );
}