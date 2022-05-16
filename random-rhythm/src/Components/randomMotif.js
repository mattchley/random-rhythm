import React, { useState } from "react";

const RandomMotif = props => {
    const { selectedScale } = props.value
    const [randomArray, setRandomArray] = useState()


    let randomMotif = []
    const generateRandomMotif = () => {
        const randomIndex = () => Math.abs(Math.ceil(Math.random() * selectedScale.length))
        for (let i = 0; i < 8; i++) {
            randomMotif.push(selectedScale[randomIndex() - 1])
        }
        setRandomArray(randomMotif)
    }

    const handleClick = () => {
        generateRandomMotif()
    }

    return (
        <div>
            <div className="staffContainer">
                {randomArray ? randomArray.map((note) => {
                    return (
                        < div className={`staffNote ${note.includes('♯') ? `${note[0]}sharp` : note}`}>
                            <p>{note}</p>
                            *
                        </div>
                    )
                }) : ""}
            </div>
            <button onClick={handleClick}>Print Random Mofit</button>

        </div >
    )

}

export default RandomMotif



