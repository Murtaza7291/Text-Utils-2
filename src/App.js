import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';

function App() {
  const [mode,changeMode] = useState("light");
  const toggleMode = ()=>{
    if (mode === 'light'){
      changeMode("dark");
      document.body.style.backgroundColor = "black";
    }else{
      changeMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Navbar name="My Navbar" toggle={toggleMode} mode = {mode}/>
    <TextForm mode = {mode}/>
    </>
  );
}

export default App;
