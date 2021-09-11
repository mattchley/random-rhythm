import React, { useState } from "react";


function Key() {
    const [key, setKey] = useState("A");


    let keyList = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
    
    const handleSubmit = () => {
        console.log(key)
    }

    return (
        <div>
            <label for="keySignature">Choose a Key Signature:</label>

            <select name="keySignature" onChange={e => setKey(e.currentTarget.value)} id="keySignature">
                {keyList.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
            <button onClick={handleSubmit}>Test State</button>
        </div>
    )

}

export default Key

// symbols to use ♯   ♮   ♭   𝄞