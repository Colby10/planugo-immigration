import React from 'react'

export default function Input(props) {
    return (

        <div className={props.className}>
            <label htmlFor="">{props.label}</label>
            <input 
                className="form-control form-control-md"  
                id={props.id}
                type={props.type}  
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
                required={props.required}
            />
            {props.erreur}
        </div>
    )
}
