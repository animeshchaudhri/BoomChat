import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../main";


function Home() {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const navigate = useNavigate();


  const handleInputChange = (setter) => (e) => setter(e.target.value);

 
  const handleRoomAction = (action) => () => {
    
    socket.emit(action, { name, room });
    socket.on(action === "joinroom" ? "joinedroom" : "roomcreated", (data) => {
      navigate(`room/${data.room}`);
    });
  };
  
  return (
    <>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={handleInputChange(setName)} />
      </div>
      <div>
        <label htmlFor="room">Room:</label>
        <input type="text" id="room" value={room} onChange={handleInputChange(setRoom)} />
      </div>
      <div>
        <button onClick={handleRoomAction("joinroom")}>Join Room</button>
        <button onClick={handleRoomAction("createRoom")}>Create Room</button>
      </div>
    </>
  );
}

export default Home;