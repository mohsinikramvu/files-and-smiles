import React from 'react'
import "./AttendenceRow.css"

function AttendenceRow(props) {
    return (
        <div className='d-flex flex-row flex-wrap justify-content-start align-items-center gap-2 p-3'>
            <div className={props.Class}>
                <span>{props.AttendenceRowText}</span>
            </div>
            <div className='card-title mb-0'>
                <h5 className='title mb-0'>{props.attdendenceRowTitle}</h5>
            </div>
        </div>
    )
}

export default AttendenceRow