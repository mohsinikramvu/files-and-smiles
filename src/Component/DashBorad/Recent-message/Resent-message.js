import React from 'react'

import './Resent-message.css'
import {Link} from 'react-router-dom'
import {Button} from '@mui/material'

function ResentMessage() {
    return (
        <div className='card h-100'>
            <div className='card-header RM-header bg-transparent border-0'>
                <h2>Recent Message</h2>
            </div>
            <div className='card-body RM-body d-flex flex-wrap justify-content-between w-100'>
                <div className='card-body-detail w-100'>
                    <div className='blue Message-info'>
                        <span>Date</span>
                        <span>From</span>
                        <span>Subject</span>
                        <span>Child</span>
                    </div>
                    <div className='RM-text'>
                        <p>No Messages in the last two weeks.</p>
                    </div>
                </div>
                <div className='RM-btn-grp d-flex flex-wrap gap-3 w-100'>
                    <Button className='RM-btn red'>Message Center</Button>
                    <Link to='Lookform' className='Link'>
                        <Button className='RM-btn blue'>
                            Compose
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResentMessage
