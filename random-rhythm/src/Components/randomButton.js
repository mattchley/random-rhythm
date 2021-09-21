import React from "react";


const RandomButton = props => {
    // this component allows for the user to randomly generate a Staff with key signature and scale.

    const handleSubmit = () => {
        // this variable sets the terrishold for the Key generated
        let x = Math.ceil(Math.random() * props.value.keyArray.length - 1)
        // this variable sets the terrishold for the Scale generated
        let y = Math.ceil(Math.random() * props.value.scaleArray.length - 1)

        // this will return Key generated
        console.log(props.value.keyArray[x])
        // this will return Scale generated
        console.log(props.value.scaleArray[y])
    }

    return (
        <div>
            <button onClick={handleSubmit}>Random Key/Scale</button>
        </div>
    )

}

export default RandomButton