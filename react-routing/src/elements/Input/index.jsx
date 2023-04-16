import React from 'react'

const Input = (props) => {
    return (
        <>
            <div className="mb-3 mt-4">
                <label htmlFor={props.name} className="form-label">{props.label}</label>
                <input onChange={props.onChange} value={props.value} name={props.name} type={props.type} className="form-control" id={props.name} placeholder={props.placeholder? props.placeholder : ''}/>
            </div>
        </>
    )
}

export default Input