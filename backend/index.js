const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');
const cors = require('cors');
const uuidv4 = require('uuid').v4; 

let rooms = [];

const app = express();
const server = createServer(app);
const io = new Server(server,{
  cors: {
    origin: "*",
    
  }

});

app.use(cors());

app.get('/', (req, res) => {
  return res.send("hello world");
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('createRoom', (data) => {
    console.log(data.name);
    console.log(uuidv4());
    const room = {
      id: uuidv4(),
      users: [
        {
          name: data.name,
          socketId: socket.id,
        }
      ],
    };
    rooms.push(room);
    socket.join(room.id);
    socket.emit('roomcreated', room.id);
  });
});


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});