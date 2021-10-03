import React from "react";


const BpmRange = props => {


    let tempo = props.value.tempo
    let tempoObjArray = props.value.tempoObjArray
    let tempoArray = props.value.tempoArray
    let bpmArray = []



    let x = tempoObjArray[tempoArray.indexOf(tempo)].max
    let y = tempoObjArray[tempoArray.indexOf(tempo)].min
    let z = tempoObjArray[tempoArray.indexOf(tempo)].min - 1

    while (x >= y) {
        z++
        bpmArray.push(z)
        y++
    }


    return (
        <div>
            <label for="scale">Choose a BPM:</label>
            <select name="scale" onChange={e => props.onChange(e.currentTarget.value)} id="scale">
                {bpmArray.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
        </div>
    )

}

export default BpmRange