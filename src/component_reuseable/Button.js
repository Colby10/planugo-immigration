import React from 'react'

export default function Button(props) {
  return (

    <button 
        href={props.href}
        type={props.type}
        id={props.id} 
        className={props.className}
        data-toggle={props.data_toggle} 
        data-target={props.data_target}
        data-dismiss={props.data_dismiss}
        onClick={props.onClick}
        data-placement={props.data_placement}
        loading={props.loading}
        disabled={props.disabled}
    >
        {props.icon}
        {props.children}
    </button>

  )
}
