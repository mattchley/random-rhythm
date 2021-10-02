import React from "react";


const Tempo = props => {
    let tempo = props.value.tempoArray


    return (
        <div>
            <label for="tempo">Choose a Tempo:</label>
            <select name="tempo" onChange={e => props.onChange(e.currentTarget.value)} id="tempo">
                {tempo.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
        </div>
    )

}

export default Tempo