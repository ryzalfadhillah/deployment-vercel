import React, { useState } from 'react'

const RandomNumberGenerotor = () => {
    const [num, setNum] = useState(0)

    const generateNumber = () => {
        setNum(Math.round(Math.random() * 100 + 1));
    }

    return (
        <>
            <section className="container text-center border border-primary rounded p-2">
                <p>
                    Your random number : {num}
                </p>
                <button className="btn btn-primary" onClick={generateNumber}>
                    Generate random numbers
                </button>
            </section>
        </>
    )
}

export default RandomNumberGenerotor