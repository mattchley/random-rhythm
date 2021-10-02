import React from "react";


const RandomButton = props => {
    // this component allows for the user to randomly generate a Staff with key signature and scale.




    const randomTempo = (tempoObj, z) => {
        // let y = Math.abs(Math.ceil(Math.random() * props.value.tempoObjArray.length - 1))
        let x = Math.ceil(Math.random() * (tempoObj[z].max - tempoObj[z].min) + tempoObj[z].min)

        return x

    }

    const handleSubmit = () => {
        let tempoObj = props.value.tempoObjArray
        
        // this variable sets the terrishold for the Key generated
        let x = Math.abs(Math.ceil(Math.random() * props.value.keyArray.length - 1))
        // this variable sets the terrishold for the Scale generated
        let y = Math.abs(Math.ceil(Math.random() * props.value.scaleArray.length - 1))
        // this variable sets the terrishold for the Tempo generated
        let z = Math.abs(Math.ceil(Math.random() * props.value.tempoArray.length - 1))

        let v =randomTempo(tempoObj, z)
       
        return [props.value.keyArray[x], props.value.scaleArray[y], props.value.tempoArray[z], v]


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