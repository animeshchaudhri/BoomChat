import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import Chat from "./Pages/Chat/Chat.jsx";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";

export const socket = io("https://chatsocketio-mcnp.onrender.com");

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="room/:id" element={<Chat />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
