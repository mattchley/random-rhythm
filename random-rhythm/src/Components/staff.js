import React from "react";

const Staff = props => {
    const { prinatableScale, scale, key, bpm, tempo } = props.value

    return (
        <div>
            <h1> {key} {scale} scale at the {tempo} tempo going {bpm} BPM</h1>
            <p> {prinatableScale}</p>
        </div >
    )

}

export default Staff



