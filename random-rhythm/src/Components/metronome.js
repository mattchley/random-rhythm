import React, { useState } from "react";


const Metronome = props => {
    const [count, setCount] = useState(1)
    let bpm = props.value.bpm
    let timeSig = props.value.timeSig
    let milliseconds = 60000 / bpm


    const tester = () => {
        // needs a reset interval function
        console.log('tester started')

        let i = 1
    
        const testbeat = () => {
            i++
            setCount(i)
            console.log(timeSig[0])
            if (i == timeSig[0]) {
                console.log(`hit`)
                i = 0
                clearInterval(testbeat)
            }
        }
        
        const universalCount = () => setInterval(testbeat, milliseconds)
        universalCount()


    }
    return (
        <div>
            <h1>Metronome Funcitonality here! {timeSig}</h1>
            <p>{count}</p>
            <button onClick={(e) => { tester() }}>Test metronome</button>
        </div>
    )

}

export default Metronome