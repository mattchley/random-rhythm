import React, { useState } from "react";


const Metronome = props => {
    const [count, setCount] = useState(1)
    let bpm = props.value.bpm
    let milliseconds = 60000 / bpm


    const tester = () => {
        let i = 1
        const testbeat = () => {
            i++
            setCount(i)
        }
        setInterval(testbeat, milliseconds)
    }
    return (
        <div>
            <h1>Metronome Funcitonality here!</h1>
            <p>{count}</p>
            <button onClick={(e) => { tester() }}>Test metronome</button>
        </div>
    )

}

export default Metronome