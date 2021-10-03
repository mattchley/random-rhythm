import Key from './Components/key'
import Scale from './Components/scale'
import Staff from './Components/staff'
import Tempo from './Components/tempo';
import RandomButton from './Components/randomButton';
import Metronome from './Components/metronome';
import './App.css';
import React, { useState } from "react";

function App() {
  const [scale, setScale] = useState("Major");
  const [key, setKey] = useState("A");
  const [tempo, setTempo] = useState(' Largo: 40 - 60 ')
  const [bpm, setBpm] = useState('40')

  const scaleArray = ["Major", "Minor"]
  const keyArray = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
  const tempoArray = [' Largo: 40 - 60 ', ' Adagio: 60 - 72 ', ' Andante: 72 - 96 ', ' Allegro: 96 - 132 ', ' Vivace: 132 - 168 ', ' Presto: 168 - 208 ']
  const tempoObjArray = [{ name: 'Largo', bpm: '40-60', min: 40, max: 60 }, { name: 'Adagio', bpm: '60-72', min: 60, max: 72 },
  { name: 'Andante', bpm: '72-96', min: 72, max: 96 },
  { name: 'Allegro', bpm: '96-132', min: 96, max: 132 },
  { name: 'Vivace', bpm: '132-168', min: 132, max: 168 },
  { name: 'Presto', bpm: '168-208', min: 168, max: 208 }]
  return (
    <div className="App">
      <Key onChange={(value) => setKey(value)} value={{ keyArray: keyArray }} />

      <Scale onChange={(value) => setScale(value)} value={{ scaleArray: scaleArray }} />

      <Tempo onChange={(value) => setTempo(value)} value={{ tempoArray: tempoArray }} />

      <RandomButton value={{ scaleArray: scaleArray, keyArray: keyArray, tempoArray: tempoArray, tempoObjArray: tempoObjArray }}
        onClick={(value) => {
          setKey(value[0]);
          setScale(value[1]);
          setTempo(value[2]);
          setBpm(value[3]);
        }} />

      <Staff value={{ scale: [scale, setScale], key: [key, setKey], keyArray: keyArray, tempo: [tempo, setTempo], bpm: [bpm, setBpm] }} />

      <Metronome value={{ bpm: bpm, tempo: tempo, tempoObjArray: tempoObjArray, tempoArray:tempoArray }} />

    </div>
  );
}

export default App;