import React, { useState } from "react";


const Metronome = props => {
    const [count, setCount] = useState(1)
    let bpm = props.value.bpm
    let timeSig = props.value.timeSig
    let milliseconds = 60000 / bpm


    const tester = () => {
        // needs a reset interval function
        console.log('tester started')
        let i = 1
        const testbeatCommon = () => {
            i++
            setCount(i)
            if (i == 4) {
                console.log(`hit`)
                i = 0
                clearInterval(testbeatCommon)
            }
        }

        const testbeatWaltz = () => {
            i++
            setCount(i)
            if (i == 3) {
                console.log(`hit`)
                i = 0
                clearInterval(testbeatWaltz)
            }
        }
        const countCommon = () => setInterval(testbeatCommon, milliseconds)

        const countWaltz = () => setInterval(testbeatWaltz, milliseconds)


        if (timeSig == '3/4') {
            console.log('time sig is 3/4')
            countWaltz()

        } else {
            console.log('time sig is 4/4')
            countCommon()
        }



    }
    return (
        <div>
            <h1>Metronome Funcitonality here!</h1>
            <p>{count}</p>
            <button onClick={(e) => { tester() }}>Test metronome</button>
        </div>
    )

}

export default Metronome