import React from "react";


const RandomButton = props => {
    // this function takes the info from tempoObj and then randomly finds a BPM based off of the index from z
    const randomBPM = (tempoObj, z) => {
        return Math.abs(Math.ceil(Math.random() * (tempoObj[z].max - tempoObj[z].min) + tempoObj[z].min))
    }

    const handleSubmit = () => {
        let tempoObj = props.value.tempoObjArray

        // this variable sets the terrishold for the Key generated
        let x = Math.abs(Math.ceil(Math.random() * props.value.keyArray.length - 1))
        console.log(x)
        // this variable sets the terrishold for the Scale generated
        let y = Math.abs(Math.ceil(Math.random() * props.value.scaleArray.length - 1))
        // this variable sets the terrishold for the Tempo generated
        let z = Math.abs(Math.ceil(Math.random() * props.value.tempoArray.length - 1))
        // this variable deteremines the BPM
        let v = randomBPM(tempoObj, z)
        // returns the Key, Scale, Tempo, and BPM to be displayed on the Staff Component
        return [props.value.keyArray[x], props.value.scaleArray[y], props.value.tempoArray[z], v]


        // // this will return Key generated props.value.keyArray[x]
        // // this will return Scale generated props.value.scaleArray[y]

    }

    return (
        <div>
            <button onClick={handleSubmit}>Random Key/Scale</button>
        </div>
    )

}

export default RandomButton