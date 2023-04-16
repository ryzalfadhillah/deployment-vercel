import React from 'react'

const TextArea = (props) => {
    return (
        <>
            <div className="mb-3 mt-4">
                <label htmlFor={props.name} className="form-label">{props.label}</label> <br />
                <textarea onChange={props.onChange} value={props.value} name={props.name} id={props.name} placeholder={props.placeholder} cols={72} rows={10} />
            </div>
        </>
    )
}

export default TextArea