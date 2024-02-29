
  import React, { useState } from 'react';
  import { io } from "socket.io-client";
  import { useNavigate } from "react-router-dom";


  const socket = io("http://localhost:3000");
  function Home() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const navigate = useNavigate();
   
   
    const handleNameChange = (e) => {
      setName(e.target.value);
    };

    const handleRoomChange = (e) => {
      setRoom(e.target.value);
    };

    const handleJoinRoom = () => {
      console.log(name, room)
     
      socket.emit("welcome", { name, room});
    };

    const handleCreateRoom = () => {
      socket.emit("createRoom", { name});
      socket.on("roomcreated", (data) => {
        // window.location.href = `http://localhost:5173/room/${data}`;
        navigate(`room/${data}`);
      });
    };

    return (
      <>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="room">Room:</label>
          <input type="text" id="room" value={room} onChange={handleRoomChange} />
        </div>
        <div>
          <button onClick={handleJoinRoom}>Join Room</button>
          <button onClick={handleCreateRoom}>Create Room</button>
        </div>
      </>
    );
  }

  export default Home;  