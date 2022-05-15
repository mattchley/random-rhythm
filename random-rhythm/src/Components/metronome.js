import React, { useState } from "react";


const Metronome = props => {
    const [count, setCount] = useState(1)
    const [intervalId, setIntervalId] = useState(false);

    const bpm = props.value.bpm
    const timeSig = props.value.timeSig
    const beatsPerMeasure = parseInt(timeSig[0])
    const milliseconds = 60000 / bpm


    const startMetronome = () => {
        const measureCalc = () => {
            setCount(count => (count + 1) % beatsPerMeasure === 0 ? beatsPerMeasure : (count + 1) % beatsPerMeasure)
        }
        if (intervalId) {
            clearInterval(intervalId);
            setCount(1);
            setIntervalId(false)
            return;
        }
        setIntervalId(setInterval(measureCalc, milliseconds))
    }


    return (
        <div>
            <h1>Metronome Funcitonality here! {timeSig}</h1>
            <p>{count}</p>
            <button onClick={startMetronome}>{(intervalId) ? 'Stop metronome' : 'Test metronome'}</button>
        </div>
    )

}

export default Metronome