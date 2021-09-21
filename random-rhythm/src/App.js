import logo from './logo.svg';
import Key from './Components/key'
import Scale from './Components/scale'
import Staff from './Components/staff'
import RandomButton from './Components/randomButton';
import './App.css';
import React, { useState } from "react";

function App() {
  const [scale, setScale] = useState("Major");
  const [key, setKey] = useState("A");

  // Just for the Random Button right now but could be used to remove data redundancy from Key and Scale Component?
  const scaleArray = ["Major", "Minor"]
  const keyArray = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]

  return (
    <div className="App">
      <Key onChange={(value) => setKey(value)} value={{ keyArray: keyArray }} />
      <Scale onChange={(value) => setScale(value)} value={{ scaleArray: scaleArray }} />
      {/* trying to connect the props from the random button to the use state to allow for a genereated staff on click. Partially there because on click shows the props passing but not selected */}
      <RandomButton value={{ scaleArray: scaleArray, keyArray: keyArray }} onClick={(value) => console.log(`hit ${value}`)}/>
      <Staff value={{ scale: [scale, setScale], key: [key, setKey], keyArray: keyArray }} />


    </div>
  );
}

export default App;