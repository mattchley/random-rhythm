import logo from './logo.svg';
import Key from './Components/key'
import Scale from './Components/scale'
import Staff from './Components/staff'
import './App.css';
import React, { useState } from "react";

function App() {
  const [scale, setScale] = useState("Major");
  const [key, setKey] = useState("A");

  const handleSubmit = () => {
    console.log(scale)
    console.log(key)
  }
  return (
    <div className="App">
      <Key onChange={(value) => setKey(value)} />
      <Scale onChange={(value) => setScale(value)} />
      <Staff value = {{scale :[scale, setScale], key :[key, setKey]}}/>

    </div>
  );
}

export default App;