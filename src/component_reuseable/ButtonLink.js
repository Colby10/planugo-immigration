import React from 'react'

export default function ButtonLink(props) {
  return (
    <a 
        className={props.className} 
        href={props.href} 
        role={props.role}
        target={props.target}
        rel={props.rel}
    >
        {props.icon}
        {props.children}

    </a>

  )
}
