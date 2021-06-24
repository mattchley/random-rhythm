import React from "react";


function Scale() {
    const scale =
    {
        scaleList: [
            {
                Name: "Major",
                steps: [1, 1, .5, 1, 1, 1, .5] 
            },
            {
                Name: "Minor",
                steps: [1, .5, 1, 1, .5, 1, 1] 
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