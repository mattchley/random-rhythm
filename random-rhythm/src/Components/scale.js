import React from "react";


const Scale = props => {
    let scaleList = props.value.scaleArray

    return (
        <div>
            <label for="scale">Choose a Scale:</label>
            <select name="scale" onChange={e => props.onChange(e.currentTarget.value)} id="scale">
                {scaleList.map(y => (
                    <option value={y}>{y}</option>
                ))}
            </select>
        </div>
    )

}

export default Scale