import React from 'react'
import './addentry.css'

function AddEntery({imgsrc, imgtitle, onClick}) {
    return (
        <div className='Add-entry-container' onClick={onClick && onClick}>
            <div className='Entery'>
                <div>
                    <div className='Sub_icon'>{imgsrc} </div>
                    
                    <div className='entery-info'>
                        <small className='entery-info'>{imgtitle} </small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEntery
