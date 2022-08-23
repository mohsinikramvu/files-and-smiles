import React from 'react'
import "./Recent-Photos.css"

import {Button} from "@mui/material"
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

function RecentPhotos() {
    return (
        <div className='RP-container card flex-row flex-wrap gap-4'>
            <div className="RP-left p-4">
                <div className="Rp-header">
                    <h2 className="mb-0">Recent Photos</h2>
                </div>
                <div className="Rp-btn-grp d-flex gap-3 flex-wrap flex-row">
                    <Button className='RP-btn red'>Classroom Photo Journal</Button>
                    <Button className="RP-btn blue">Refresh</Button>
                </div>
            </div>
            <div className="Rp-Right p-4">
                <SentimentVeryDissatisfiedIcon className='Sad-Emoji' width="150" height="150" />
                <h4>Oh no! No photos hav e been added for 001 recently.</h4>
                <span>Uploading photos is the #1 way to engage parents.</span>
            </div>
        </div>
    )
}

export default RecentPhotos;