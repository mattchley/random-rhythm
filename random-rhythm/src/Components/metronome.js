import React from "react";


const Metronome = props => {

    let bpm = props.value.bpm
    let milliseconds = 60000/bpm

    const tester = () => {
        console.log(bpm)
        let testbeat = () => {
            console.log('hit')
        }
        setInterval(testbeat, milliseconds)
    }
    return (
        <div>
            <h1>Metronome Funcitonality here!</h1>
            <h3>{bpm}</h3>
            <button onClick={(e) => { tester() }}>Test metronome</button>
        </div>
    )

}

export default Metronome