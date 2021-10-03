import React from "react";


const TimeSignature = props => {
    let timeSignature = props.value.timeSigArray
   
    return (
        <div>
        <label for="timeSig">Choose a Time Signature:</label>
        <select name="timeSig" onChange={e => props.onChange(e.currentTarget.value)} id="timeSig">
            {timeSignature.map(y => (
                <option value={y}>{y}</option>
            ))}
        </select>
    </div>
    )

}

export default TimeSignature