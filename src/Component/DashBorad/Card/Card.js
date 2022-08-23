import React from 'react'

import './Card.css'

function Card(props) {
    return (
        <>
            <div className={props.className}>
                <div className='card-header d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                    <h2>{props.headTitle}</h2>
                    <span>{props.headIcon}</span>
                </div>
                <div className='card-body align-items-center d-flex w-100'>{props.cardbody}</div>
            </div>
        </>
    )
}

export default Card
