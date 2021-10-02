import React from "react";


const RandomButton = props => {
    // this component allows for the user to randomly generate a Staff with key signature and scale.




    const randomTempo = (tempoObj) => {
        let y = Math.abs(Math.ceil(Math.random() * props.value.tempoObjArray.length - 1))
        let x = Math.ceil(Math.random() * (tempoObj[1].max - tempoObj[y].min) + tempoObj[y].min)
        return `${tempoObj[y].name} at ${x}bpm`
    }

    const handleSubmit = () => {
        let tempoObj = props.value.tempoObjArray
        randomTempo(tempoObj)
        // this variable sets the terrishold for the Key generated
        let x = Math.abs(Math.ceil(Math.random() * props.value.keyArray.length - 1))
        // this variable sets the terrishold for the Scale generated
        let y = Math.abs(Math.ceil(Math.random() * props.value.scaleArray.length - 1))
        // this variable sets the terrishold for the Tempo generated
        let z = Math.abs(Math.ceil(Math.random() * props.value.tempoArray.length - 1))

        return [props.value.keyArray[x], props.value.scaleArray[y], props.value.tempoArray[z], randomTempo(tempoObj)]


        // // this will return Key generated props.value.keyArray[x]
        // // this will return Scale generated props.value.scaleArray[y]

    }

    return (
        <div>
            <button onClick={e => props.onClick(handleSubmit())}>Random Key/Scale</button>
        </div>
    )

}

export default RandomButton