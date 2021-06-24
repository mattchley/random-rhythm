import React from "react";


function Key() {
    const key =
    {
        keyList: ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
    }

    return (
        <div>
            <label for="keySignature">Choose a Key Key Signature:</label>

            <select name="keySignature" id="keySignature">
                {key.keyList.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
        </div>
    )

}

export default Key

// symbols to use ♯   ♮   ♭   𝄞