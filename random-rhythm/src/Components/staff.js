import React from "react";


const Staff = props => {

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
        if (scaleType === 'Minor') {
            // This funciton filters out the notes in the noteArray by their index to conform to the Minor scale
            // minor scale pattern steps: [2steps, 1step, 2steps, 2steps, 1step, 2steps, 2steps]
            // There are 12 notes in an octave and we only need 8 that folow the above pattern
            // the index counts should be 0 2 3 5 7 8 10
            const minorScaleFilter = changeKey.filter((note, index) => {
                if ([index] === 0) {
                    return note
                } else if ([index] === 2) {
                    return note
                } else if ([index] === 3) {
                    return note
                } else if ([index] === 5) {
                    return note
                } else if ([index] === 7) {
                    return note
                } else if ([index] === 8) {
                    return note
                } else if ([index] === 10) {
                    return note
                }

            })
            // Returns the filtered scale to reflect a Minor Octave
            return minorScaleFilter

        } else {
            // This funciton filters out the notes in the noteArray by their index to conform to the Major scale
            // minor scale pattern steps:[2 steps, 2 steps, 1 step, 2 steps, 2 steps, 2 steps, 1 step] 
            // There are 12 notes in an octave and we only need 8 that folow the above pattern
            // the index counts should be 0 2 4 5 7 9 11
            const majorScaleFilter = changeKey.filter((note, index) => {
                if ([index] === 0) {
                    return note
                } else if ([index] === 2) {
                    return note
                } else if ([index] === 4) {
                    return note
                } else if ([index] === 5) {
                    return note
                } else if ([index] === 7) {
                    return note
                } else if ([index] === 9) {
                    return note
                } else if ([index] === 11) {
                    return note
                }
            })
            // Returns the filtered scale to reflect a Major Octave
            return majorScaleFilter
        }

    }

    return (
        <div>
            <h1> {props.value.key[0]} {props.value.scale[0]} scale at the {props.value.tempo[0]} tempo going {bpm} BPM</h1>
            <p>{createScale(scaleType, changeKey(noteArray, keyType)).map(y => (
                <option value={y}>{y}</option>
            ))}</p>

        </div>
    )

}

export default Staff



