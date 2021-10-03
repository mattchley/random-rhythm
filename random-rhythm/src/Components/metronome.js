import React, { useState } from "react";


const Metronome = props => {
    const [count, setCount] = useState(1)
    let bpm = props.value.bpm
    let timeSig = props.value.timeSig
    let milliseconds = 60000 / bpm


    const tester = () => {
        // needs a reset interval function
        if (timeSig == '3/4') {
            console.log('time sig is 3/4')
        } else {
            console.log('time sig is 4/4')
        }
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