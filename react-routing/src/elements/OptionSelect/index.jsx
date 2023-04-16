import React from 'react'

const Select = (props) => {
    return (
        <>
            <div className="mb-3 mt-4 w-40 d-block">
                <label className="form-label">{props.label}</label>
                {props.option.map((option, index) => {
                    return(
                        <div key={index} className="form-check">
                            <input onChange={props.onChange} id={props.name} value={option} className="form-check-input" type="radio" name={props.name} />
                            <label className="form-check-label" htmlFor={props.name}>
                                {option}
                            </label>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Select