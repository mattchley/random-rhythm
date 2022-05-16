import Key from './Components/key'
import Scale from './Components/scale'
import Staff from './Components/staff'
import Tempo from './Components/tempo';
import BpmRange from './Components/bpmRange';
import RandomButton from './Components/randomButton';
import Metronome from './Components/metronome';
import TimeSignature from './Components/timeSig';
import RandomMotif from './Components/randomMotif';
import './App.css';
import React, { useState } from "react";


function App() {
  const [scale, setScale] = useState("Major");
  const [key, setKey] = useState("A");
  const [tempo, setTempo] = useState(' Largo: 40 - 60 ')
  const [bpm, setBpm] = useState('40')
  const [timeSig, setTimeSig] = useState('3/4')
  const [selectedScale, setSelectedScale] = useState()

  const scaleArray = ["Major", "Minor"]
  const keyArray = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
  const tempoArray = [' Largo: 40 - 60 ', ' Adagio: 60 - 72 ', ' Andante: 72 - 96 ', ' Allegro: 96 - 132 ', ' Vivace: 132 - 168 ', ' Presto: 168 - 208 ']
  const tempoObjArray = [{ name: 'Largo', bpm: '40-60', min: 40, max: 60 }, { name: 'Adagio', bpm: '60-72', min: 60, max: 72 },
  { name: 'Andante', bpm: '72-96', min: 72, max: 96 },
  { name: 'Allegro', bpm: '96-132', min: 96, max: 132 },
  { name: 'Vivace', bpm: '132-168', min: 132, max: 168 },
  { name: 'Presto', bpm: '168-208', min: 168, max: 208 }]
  const timeSigArray = ['3/4', '4/4']


  const changeKey = (keyArray, key) => {
    let keyIndex = keyArray.findIndex(note => note === key)
    let firstHalf = keyArray.slice(keyIndex, keyArray.length)
    let secondHalf = keyArray.slice(0, keyIndex)
    return firstHalf.concat(secondHalf)
  }

  const createScale = (scale, changeKey) => {
    let scaleFiltered = []
    if (scale === 'Minor') {
      for (let i = 0; i < changeKey.length; i++) {
        if (i === 0 || i === 2 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10) {
          scaleFiltered.push(changeKey[i])
        }
      }
      return scaleFiltered


    } else {
      for (let i = 0; i < changeKey.length; i++) {
        if (i === 0 || i === 2 || i === 4 || i === 5 || i === 7 || i === 9 || i === 11) {
          scaleFiltered.push(changeKey[i])
        }
      }
      return scaleFiltered
    }

  }
  // e2-e6 need to create a background staff for bass and teble cleft
  const prinatableScale = createScale(scale, changeKey(keyArray, key))
  return (
    <div className="App">
      <div className='mainContainer'>
        <div className="leftContainer">

          <Key onChange={(value) => setKey(value)} value={{ keyArray: keyArray }} />

          <Scale onChange={(value) => setScale(value)} value={{ scaleArray: scaleArray }} />

          <TimeSignature onChange={(value) => setTimeSig(value)} value={{ timeSigArray: timeSigArray }} />

          <Tempo onChange={(value) => setTempo(value)} value={{ tempoArray: tempoArray }} />

          <BpmRange onChange={(value) => setBpm(value)} value={{ bpm: bpm, tempo: tempo, tempoArray: tempoArray, tempoObjArray: tempoObjArray }} />

          <RandomButton value={{ scaleArray: scaleArray, keyArray: keyArray, tempoArray: tempoArray, tempoObjArray: tempoObjArray }}
            onClick={(randomButtonResults) => {
              setKey(randomButtonResults[0]);
              setScale(randomButtonResults[1]);
              setTempo(randomButtonResults[2]);
              setBpm(randomButtonResults[3]);
            }} />
        </div>
        <div className='rightContainer'>
          <Staff value={{ prinatableScale: prinatableScale, scale: scale, key: key, bpm: bpm, tempo: tempo }}
          />

          <Metronome value={{ bpm: bpm, timeSig: timeSig }} />
        </div>

      </div>

      <div className='bottomContainer'>
        <RandomMotif value={{ prinatableScale: prinatableScale }} />
      </div>

    </div>
  );
}

export default App;