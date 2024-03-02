import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../../main";
import Form from "../../componets/Form/Form";
import "./Home.css";
import ParticlesComponent from "../../componets/Particles/ParticlesComponent";
import { GlobalLoading, showLoading } from 'react-global-loading';

function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (field, event) => {
    if (field === 'name') {
      setName(event.target.value);
    } else if (field === 'room') {
      setRoom(event.target.value);
    }
  };

  const handleRoomAction = (action) => {
    socket.emit(action, { name, room });
    socket.on(action === "joinroom" ? "joinedroom" : "roomcreated", (data) => {
      navigate(`room/${data.room}`);
    });
  };

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
   
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
      setIsLoaded(true);
     
    }, 3000); // 3 seconds
  }, []); 

  return (
    <>
     <GlobalLoading />
      <div className="container">
        
        
          {isLoaded && <Form
          
            name={name}
            room={room}
            handleInputChange={handleInputChange}
            handleRoomAction={handleRoomAction}
            
          />}
        
      </div>
      <div>
          {isLoaded && <ParticlesComponent className="tsparticles" />}
        </div>
    </>
  );
}

export default Home;