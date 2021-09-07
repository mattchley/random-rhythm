import React from "react";


function Scale() {
    const scale =
    {
        scaleList: [
            {
                Name: "Major",
                notesIndex: [0, 2, 4, 5, 7, 9, 11, 12] 
            },
            {
                Name: "Minor",
                notesIndex: [0, 2, 3, 5, 7, 9, 10, 12] 
            }
        ]
    }

    return (
        <div>
            <label for="scale">Choose a Scale:</label>

            <select name="scale" id="scale">
                {scale.scaleList.map(y => (
                    <option value={y.Name}>{y.Name}</option>
                ))}
            </select>
        </div>
    )

}

export default Scale