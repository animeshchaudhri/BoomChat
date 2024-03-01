import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../../main";
import Form from "../../componets/Form/Form";
import "./Home.css";
import ParticlesComponent from "../../componets/Particles/ParticlesComponent";

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
      // console.log(data);
      navigate(`room/${data.room}`);
    });
  };

  return (
    <>
      <div className="conatiner">
        <ParticlesComponent />
        <Form
          name={name}
          room={room}
          handleInputChange={handleInputChange}
          handleRoomAction={handleRoomAction}
        />
      </div>
    </>
  );
}

export default Home;