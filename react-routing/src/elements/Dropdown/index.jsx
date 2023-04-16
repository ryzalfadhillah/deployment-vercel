import React from 'react'

const Dropdown = (props) => {
    return (
        <>
            <div className="mb-3 mt-4">
                <label htmlFor={props.name} className="form-label">{props.label}</label>
                <select value={props.value} onChange={props.onChange} name={props.name} className="form-select" aria-label="Default select example" id={props.name}>
                    <option disabled value=''>Choose...</option>
                    {props.option.map((option, index) => {
                        return(
                            <option key={index} value={option}>{option}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export default Dropdown