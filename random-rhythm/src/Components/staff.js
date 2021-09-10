import React from "react";


function Staff() {
    const noteArray = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
    const noteArrayTwo = ["C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭", "A", "A♯/B♭", "B"]
    const scaleType = true

    // funtion that changes the the scale based on the note array
    const createScale = (noteArray, scaleType) => {
        // This funciton filters out the notes in the noteArray by their index to conform to the Minor scale
        const minorScaleFilter = noteArray.filter((note, index) => {
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

        // This funciton filters out the notes in the noteArray by their index to conform to the Minor scale
        const majorScaleFilter = noteArrayTwo.filter((note, index) => {
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
        // Now that the array is in the fuction there will need to be a filtering of notes based on the scale type
        if (scaleType == true) {
            // minor scale pattern steps: [2steps, 1step, 2steps, 2steps, 1step, 2steps, 2steps]
            // There are 12 notes in an octave and we only need 8 that folow the above pattern
            // the index counts should be 0 2 3 5 7 8 10
            console.log(minorScaleFilter)

        } else {
            console.log("scale is major")
            // minor scale pattern steps:[2 steps, 2 steps, 1 step, 2 steps, 2 steps, 2 steps, 1 step] 
            // There are 12 notes in an octave and we only need 8 that folow the above pattern
            // the index counts should be 0 2 4 5 7 9 11
            console.log(majorScaleFilter)
        }

    }

    const handleSubmit = () => {
        createScale(noteArray, scaleType);
    }

    return (
        <div>
            <h1> A minor scale print out </h1>

            <p>intended print out: A B C D E F G</p>

            <h3>PRINT OUT</h3>
            <p>{noteArray.map(y => (
                <option value={y}>{y}</option>
            ))}</p>
            <button onClick={handleSubmit}>Test</button>
            {/* needs to be a div where the notes are written out on the page */}

        </div>
    )

}

export default Staff