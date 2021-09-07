import React from "react";


function Staff() {
    const noteArray = ["A", "A♯/B♭", "B", "C", "C♯/D♭", "D", "D♯/E♭", "E", "F", "F♯/G♭", "G", "G♯/A♭"]
    const scaleType = true

    // funtion that changes the the scale based on the note array
    const createScale = (noteArray, scaleType) => {
        // Now that the array is in the fuction there will need to be a filtering of notes based on the scale type
        if (scaleType == true) {
            // minor scale pattern steps: [2steps, 1step, 2steps, 2steps, 1step, 2steps, 2steps]
            // There are 12 notes in an octave and we only need 8 that folow the above pattern
            // the index counts should be 0 2 3 5 7 9 10 12
            let i = 0
            while (i <= 12) {
                switch(noteArray[i]){
                    case 0:
                    console.log(i)
                    ++i
            //         case 2:
            //         console.log(i)
            //         ++i
            //         case 3:
            //         console.log(i)
            //         ++i
            //         case 5:
            //         console.log(i)
            //         ++i
            //         case 7:
            //         console.log(i)
            //         ++i
            //         case 9:
            //         console.log(i)
            //         ++i
            //         case 10:
            //         console.log(i)
            //         ++i
                    case 12:
                    console.log(i)
                    ++i
                    break;
                }
            }
        } else {
            console.log("scale is major")
            // minor scale pattern steps:[2 steps, 2 steps, 1 step, 2 steps, 2 steps, 2 steps, 1 step] 
            // There are 12 notes in an octave and we only need 8 that folow the above pattern
            // the index counts should be 0 2 4 5 7 9 11 12

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

        </div>
    )

}

export default Staff