import React from 'react'

import './SMcard2.css'

function SMcard2(props) {
    return (
        <div className='SMcard2-container'>
            <div style={props.style && props.style} className={`SMcard2-header ${props.head ? 'blue' : 'grey'}`}>
                <p>{props.head}</p>
            </div>
            {props.head ? (
                    <div className="SMcard2-body">
                        <p>-</p>
                        <p>0</p>
                        <p>0</p>
                    </div>
                ) : (
                    <div className="SMcard2-body">
                        <p className='card-list-item'>Ratio</p>
                        <p className='card-list-item'>Students</p>
                        <p className='card-list-item'>Teachers</p>
                    </div>
                )}
        </div>
    )
}

export default SMcard2;