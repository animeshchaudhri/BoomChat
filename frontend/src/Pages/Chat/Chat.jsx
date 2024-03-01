import React, { useState, useEffect } from "react";
import { socket } from "../../main";
import { useParams } from "react-router-dom";
import "./Chat.css";
import Chatbox from "../../componets/Chatbox/Chatbox";
import Navbar from "../../componets/Navbar/Navbar";

export default function Chat() {
  const { id } = useParams();
  const [chats, setChats] = useState([]);
  const [message, setMessage] = useState("");
  const [name, setName] = useState();

  const handleSubmit = () => {
    socket.emit("getname", socket.id);
    socket.on("gotname", (data) => {
      setName(data);
    });

    socket.emit("outgoingMessage", {
      message: message,
      room: id,
      name: name,
    });

    setChats(prevChats => [...prevChats, {
      action: "outgoing",
      message: message,
      name: name,
    }]);

    setMessage("");
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    const handleIncomingMessage = (data) => {
      setChats(prevChats => [...prevChats, {
        action: "incoming",
        message: data.message,
        name: data.name,
      }]);
    };

    socket.on("IncomingMessage", handleIncomingMessage);
  }, []);

  useEffect(() => {}, [chats]);

  useEffect(() => {
    socket.emit("getname", socket.id);
    socket.on("gotname", (data) => {
      setName(data);
    });
  }, []);

  return (
    <>
      <div className="chat-room">
        <Navbar />
        <Chatbox
          id={id}
          chats={chats}
          name={name}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          message={message}
        />
      </div>
    </>
  );
}