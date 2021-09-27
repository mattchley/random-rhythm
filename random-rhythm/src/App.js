import Key from './Components/key'
import Scale from './Components/scale'
import Staff from './Components/staff'
import Tempo  from './Components/tempo';
import RandomButton from './Components/randomButton';
import './App.css';
import React, { useState } from "react";

function App() {
  const [scale, setScale] = useState("Major");
  const [key, setKey] = useState("A");
  const [tempo, setTempo] =useState(' Largo: 40 - 60 ')

  const scaleArray = ["Major", "Minor"]
  const keyArray = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
  const tempoArray = [' Largo: 40 - 60 ', ' Adagio: 60 - 72 ', ' Andante: 72 - 96 ', ' Allegro: 96 - 132 ', ' Vivace: 169 - 208 ', ' Presto: 168 - 208 ']

  return (
    <div className="App">
      <Key onChange={(value) => setKey(value)} value={{ keyArray: keyArray }} />

      <Scale onChange={(value) => setScale(value)} value={{ scaleArray: scaleArray }} />

      <Tempo onChange={(value) => setTempo(value)} value={{ tempoArray: tempoArray }}/>

      <RandomButton value={{ scaleArray: scaleArray, keyArray: keyArray }}
        onClick={(value) => {
          setKey(value[0]);
          setScale(value[1])
          console.log(`hit ${value}`)
        }} />
      
      <Staff value={{ scale: [scale, setScale], key: [key, setKey], keyArray: keyArray, tempo:[tempo, setTempo] }} />
      
    
    </div>
  );
}

export default App;