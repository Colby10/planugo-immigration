import React from 'react'

const ServiceCanada = (props) => {

    return (
        <div className="col-md-4">
            <div className="acc">
                <div>
                    <img src={props.src} alt="" />
                </div>
                <div className='text'>
                    <h4 className='fw-bold'>{props.titre}</h4>
                    <p>{props.texte1}
                        <a href={props.href} className='ee'> <strong>{props.lire}</strong> {props.icon}</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ServiceCanada