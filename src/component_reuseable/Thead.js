import React from 'react';
import '../css/homedashboard.css';


export default function Thead(props) {
    return (

        <>
            <thead>
                <tr>
                    <th>{props.theadIndex}</th>
                    <th>{props.theadOne}</th>
                    <th>{props.theadTwo}</th>
                    <th>{props.theadTree}</th>
                    <th>{props.theadFour}</th>
                    <th>{props.theadFive}</th>
                    <th>{props.theadSix}</th>
                    <th>{props.theadSeven}</th>
                </tr>
            </thead>
        </>
    )
}