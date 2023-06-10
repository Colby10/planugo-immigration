import React from 'react'

export default function Select(props) {
    return (
        <div className={props.className}>
            <label htmlFor="">{props.label}<span 
                className='text-important'>{props.important}</span>
            </label>
            <select  className="form-select form-select-md fw-bold" 
                name={props.name} id="" value={props.value} onChange={props.onChange}>

               <option value={""}>{props.selected}</option>
                {props.options.map(item => (
                    <option key={item.label} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
            {props.erreur}
        </div>
    )
}