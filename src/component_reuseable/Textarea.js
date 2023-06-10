import React from 'react'

export default function Textarea(props) {
    return (
        <>
            <label htmlFor=''>{props.label}</label>
            <textarea
                className={props.className}
                rows={props.rows}
                onChange={props.onChange}
                placeholder={props.placeholder}
                value={props.value}
                required={props.required}
            >
                
            </textarea>
        </>
    )
}
