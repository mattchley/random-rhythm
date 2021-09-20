import React from "react";


const Scale = props => {
    let scaleList = [
        {
            Name: "Major",
            notesIndex: [0, 2, 4, 5, 7, 9, 11]
        },
        {
            Name: "Minor",
            notesIndex: [0, 2, 3, 5, 7, 8, 10]
        }
    ]


    return (
        <div>
            <label for="scale">Choose a Scale:</label>
            <select name="scale" onChange={e => props.onChange(e.currentTarget.value)} id="scale">
                {scaleList.map(y => (
                    <option value={y.Name}>{y.Name}</option>
                ))}
            </select>
        </div>
    )

}

export default Scale