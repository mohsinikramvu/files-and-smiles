import React from 'react'
import "./Messages.css"

import {Button} from "@mui/material"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Messages() {
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12">
                    <div className="card bg-transparent border-0">
                        <div className="card-header bg-white d-flex flex-wrap gap-3 justify-content-between align-items-center">
                            <div className='Message-title'>
                                <h2>Messaging</h2>
                            </div>
                            <div className='Message-list gap-3'>
                                <span><a href="#inbox" className='inbox-icon'>Inbox</a></span>
                                <span><a href='#archived' className='archived'>Archived</a></span>
                                <span><a href='#scheduled' className='archived'>Scheduled</a></span>
                                <span><a href='#send' className='archived'>Send</a></span>
                            </div>
                        </div>
                        <div className="card-body bg-transparent">
                            <div className="message-btns bg-transparent">
                                <div className="message-left-btn d-flex gap-2 flex-wrap">
                                    <Button className='blue'>Messages <span className='btn-box'>0</span></Button>
                                    <Button className="transparent">Comments <span className='btn-box'>0</span></Button>
                                </div>
                                <div className="message-right-btn d-flex gap-2 flex-wrap">
                                    <Button className="transparent"><span>Report Actions</span> <ArrowBackIosIcon
                                        className="Arrow-Down"/></Button>
                                    <Button className='red'>Compose</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mb-20">
                    <div className='Message-container'>
                        <div className="Message-body">
                            <div className="blue Message-sub-list">
                                <span>Time</span>
                                <span>Form</span>
                                <span>Subject</span>
                                <span>Child</span>
                            </div>
                            <div className="data-available">
                                <p>No data available in table</p>
                            </div>
                            <div className='Message-btns2'>
                                <Button className="transparent">Staff Messages</Button>
                                <Button className="transparent">Parents Messages</Button>
                                <Button className="transparent">Teachers Have Access</Button>
                            </div>
                            <div className='Entries'>
                                <p>Showing 0 to 0 of 0 entries</p>
                            </div>
                            <div className="Messages-btn-3 d-flex gap-3 align-items-center justify-content-center">
                                <Button className="blue">Previous</Button>
                                <Button className="grey">Next</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Messages