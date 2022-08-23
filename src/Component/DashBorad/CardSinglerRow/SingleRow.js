import React from 'react'
import './SingleRow.css'

function SingleRow(props) {
    return (
        <div className='d-flex flex-row flex-wrap justify-content-between align-items-center gap-2 p-3'>
            <div className='card-title mb-0'>
                <h5 className="title mb-0">{props.cardRowTitle}</h5>
            </div>
            <div className={props.Class}>
                {props.ActivityRowText}
            </div>
        </div>
    )
}

export default SingleRow

