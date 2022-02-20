import React from 'react'

export default function Input(props) {
  return (
    <div className="mb-3">
        {props.label && <label className="form-label">{props.label}</label> }
        <input type={props.type} className="form-control" 
            value={props.value} 
            id={props.id} 
            onChange={props.onChange}
            placeholder={props.placeholder}
            aria-describedby="emailHelp" />
        <div className="form-text">{props.error}</div>
    </div>
  )
}
