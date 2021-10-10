import React, { useState } from "react";


const Metronome = props => {
    const [count, setCount] = useState(1)
    let bpm = props.value.bpm
    let timeSig = props.value.timeSig
    let milliseconds = 60000 / bpm

    let i = 1
    let intervalId;
    let testbeat = () => {
        i++
        console.log(i)
        // setCount(i)
        // if (i == timeSig[0]) {
        //     i = 0
        // }
    }

    let universalCount = () => {
        if (intervalId) {
            clearInterval(intervalId)
        }
        intervalId = setInterval(testbeat, milliseconds)
    }

    let clearCount = () => {
        console.log(i)
        clearInterval(intervalId)
        i = 0
    }
    const tester = () => {
        universalCount()
    }

    const killswitch = () => {
        clearCount()
    }
    return (
        <div>
            <h1>Metronome Funcitonality here! {timeSig}</h1>
            <p>{count}</p>
            <button onClick={(e) => { tester() }}>Test metronome</button>
            <button onClick={(e) => { killswitch() }}>kill metronome</button>
        </div>
    )

}

export default Metronome