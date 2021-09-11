import React, { useState } from "react";


function Scale() {

    const [scale, setScale] = useState("Major");


    let scaleList = [
        {
            Name: "Major",
            notesIndex: [0, 2, 4, 5, 7, 9, 11, 12]
        },
        {
            Name: "Minor",
            notesIndex: [0, 2, 3, 5, 7, 9, 10, 12]
        }
    ]

    const handleSubmit = () => {
        console.log(scale)
    }


    return (
        <div>
            <label for="scale">Choose a Scale:</label>

            <select name="scale" onChange={e => setScale(e.currentTarget.value)}id="scale">
                {scaleList.map(y => (
                    <option value={y.Name}>{y.Name}</option>
                ))}
            </select>
            <button onClick={handleSubmit}>Test State</button>
        </div>
    )

}

export default Scale