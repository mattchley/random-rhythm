import React, { useState } from "react";


const Metronome = props => {

    const [bpmRange, setBpmRange] =useState([])

    let bpm = props.value.bpm
    let milliseconds = 60000 / bpm

    let tempo = props.value.tempo
    let tempoObjArray = props.value.tempoObjArray
    let tempoArray = props.value.tempoArray
    let bpmRangeArray = []

    const bpmGenerator = () => {

        let x = tempoObjArray[tempoArray.indexOf(tempo)].max
        let y = tempoObjArray[tempoArray.indexOf(tempo)].min
        let z = tempoObjArray[tempoArray.indexOf(tempo)].min - 1

        while (x >= y) {
            z++
            bpmRangeArray.push(z)
            y++
        }
        setBpmRange(bpmRangeArray)
    }

    const tester = () => {
        // let testbeat = () => {
        //     console.log('hit')
        // }
        // setInterval(testbeat, milliseconds)
        bpmGenerator()
    }
    return (
        <div>
            <h1>Metronome Funcitonality here!</h1>
            <h3> {tempo}</h3>
            <select name="bpm" onChange={e => props.onChange(e.currentTarget.value)} id="bpm">
                {bpmRange.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
            <h3>{bpm}</h3>
            <button onClick={(e) => { tester() }}>Test metronome</button>
        </div>
    )

}

export default Metronome