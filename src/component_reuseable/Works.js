import React from 'react'


const Works = (props) => {
    return (
        <div className="col-md-3">
            <div className="div-une">
                <div className="image">
                    <img src={props.src} alt="" />
                </div>
                <div className="dive-deux">
                    <h3>{props.titre}</h3>
                    <p><a href={props.href}>{props.description} {props.icon}</a></p>
                </div>
            </div>
        </div>
    )
}

export default Works