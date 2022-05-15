import React from "react";


const Key = props => {

    let keyList = props.value.keyArray

    return (
        <div className="div">
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