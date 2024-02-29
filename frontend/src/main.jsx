import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chat from "./Pages/Chat.jsx"
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { io } from 'socket.io-client'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "room/:id",
    element: <Chat  />,  
  },
]);

export const socket = io("http://localhost:3000");

ReactDOM.createRoot(document.getElementById('root')).render(
  // // <React.StrictMode>
  //   {/* <App /> */}
  //   <>
   
  // {/* // </React.StrictMode>, */}
  // </>
  <RouterProvider router={router} />
)
