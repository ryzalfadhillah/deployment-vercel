import React from 'react'

const ErrorMessage = (props) => {
  return (
    <>
        {
            <small className="text-danger">{props.message}</small>
        }
    </>
  )
}

export default ErrorMessage