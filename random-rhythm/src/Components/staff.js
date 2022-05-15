import React, { useState } from "react";

const Staff = props => {
    const [staffCreated, setStaffCreated] = useState(false)
    const [randomArray, setRandomArray] = useState()

    const noteArray = props.value.keyArray
    const scaleType = props.value.scale[0]
    const keyType = props.value.key[0]
    const bpm = props.value.bpm[0]

    // this function is set to change the key center of the scale.
    const changeKey = (noteArray, keyType) => {
        // The default for scales is C that starts with C, what this fucntion does is chop and insert the notes in the proper order.

        // This portion finds the index of the Key to start the new scale
        let keyIndex = noteArray.findIndex(note => note === keyType)

        // this provides the logic of the function.
        // Since we are essentially cuting the array in half we will use 2 variables to deteremine the keyindex to the end and then the remaining notes to add to end of the first half.
        let firstHalf = noteArray.slice(keyIndex, noteArray.length)
        let secondHalf = noteArray.slice(0, keyIndex)
        return firstHalf.concat(secondHalf)
    }

    // funtion that changes the the scale based on the note array
    const createScale = (scaleType, changeKey) => {
        // Now that the array is in the fuction there will need to be a filtering of notes based on the scale type
        // FUTUE FUNC: will need to do all sorts of scale types but for now does Major/Minor for testing, maybe switch statement for future?
        let scaleFiltered = []
        if (scaleType === 'Minor') {
            for (let i = 0; i < changeKey.length; i++) {
                if (i === 0 || i === 2 || i === 3 || i === 5 || i === 7 || i === 8 || i === 10) {
                    scaleFiltered.push(changeKey[i])
                }
            }
            return scaleFiltered


        } else {
            for (let i = 0; i < changeKey.length; i++) {
                if (i === 0 || i === 2 || i === 4 || i === 5 || i === 7 || i === 9 || i === 11) {
                    scaleFiltered.push(changeKey[i])
                }
            }
            return scaleFiltered
        }

    }

    const prinatableScale = createScale(scaleType, changeKey(noteArray, keyType))
    let randomMotif = []
    const generateRandomMotif = () => {
        const randomIndex = () => Math.abs(Math.ceil(Math.random() * prinatableScale.length))
        for (let i = 0; i < 7; i++) {
            randomMotif.push(prinatableScale[randomIndex() - 1])
        }
        setRandomArray(randomMotif)
    }

    const handleClick = () => {
        generateRandomMotif()
        setStaffCreated(!staffCreated)
    }

    return (
        <div>
            <h1> {props.value.key[0]} {props.value.scale[0]} scale at the {props.value.tempo[0]} tempo going {bpm} BPM</h1>
            <button onClick={handleClick}>Print Scale</button>
            <p>  {staffCreated ? prinatableScale : "Choose items above to generate scale staff"}</p>
            <div className="staffContainer">
                {staffCreated && randomArray ? randomArray.map((note) => {
                    return (
                        < div className={`staffNote ${note.includes('♯') ? `${note[0]}sharp` : note}`}>
                            *
                        </div>
                    )
                }) : prinatableScale.map((note) => {
                    return (
                        < div className={`staffNote ${note.includes('♯') ? `${note[0]}sharp` : note}`}>
                            *
                        </div>
                    )
                })}
            </div>

        </div >
    )

}

export default Staff



