import React from 'react'
import './ListHead.css'
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import {Button} from "@mui/material";

function ListHead() {
    return (
        <>
            <div className="list-head-one d-flex justify-content-between align-items-center flex-wrap gap-3 flex-wrap">
                <h2 className="fs-5">Staff <span className="staff-ratio">Ratio&nbsp;n/a</span></h2>
                <Button className="add-btn red">
                    Hide&nbsp;Staff
                </Button>
            </div>
            {/*<div className='list-head'>*/}
            {/*    <div className='list-head-one'>*/}
            {/*        <h2>Staff </h2>*/}
            {/*        <p></p>*/}
            {/*    </div>*/}
            {/*    <div className='list-head-two'>*/}
            {/*        <button></button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export default ListHead
