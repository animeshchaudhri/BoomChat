import { useState } from 'react'
import * as ReactDOM from "react-dom/client";
import './App.css'
import Home from "./Pages/Home"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
