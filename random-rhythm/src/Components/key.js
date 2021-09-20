import React, { useState } from "react";


const Key = props => {


    let keyList = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]

    return (
        <div>
            <label for="keySignature">Choose a Key Signature:</label>

            <select name="keySignature" onChange={e => props.onChange(e.currentTarget.value)} id="keySignature">
                {keyList.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
        </div>
    )

}

export default Key

// symbols to use ♯   ♮   ♭   𝄞