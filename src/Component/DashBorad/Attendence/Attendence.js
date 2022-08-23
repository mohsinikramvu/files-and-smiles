import React from 'react'
import './Attendence.css'
import {Link} from 'react-router-dom'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import {Button} from '@mui/material'

import AttendenceList from '../AttendenceList/AttendenceList'

function Attendence() {
    return (
        <div className='card h-100'>
            <div className='card-header d-flex justify-content-between align-items-center gap-2 flex-wrap'>
                <h2>Attendence</h2>
                <CalendarTodayIcon />
            </div>
            <div className='card-body d-flex flex-row align-items-center gap-2 w-100 justify-content-between'>
                <AttendenceList/>
                <div className=''>
                    <div className='AttdenceCilcle'>
                        <h2>03</h2>
                        <h3>scheduled</h3>
                    </div>
                </div>
                <div className='d-flex flex-column flex-wrap justify-content-center align-items-center gap-3'>
                    <Link to='/StaffManagement' className='Link'>
                        <Button className='add-btn red'>List</Button>
                    </Link>
                    <Link to='/Staffform' className='Link'>
                        <Button className='add-btn blue'>
                            <SearchRoundedIcon/> Search
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
        // <div className='Attdence-container'>
        //     <div className='Attendence-header'>
        //         <h2>Attendence</h2>
        //         <CalendarTodayIcon/>
        //     </div>
        //     <div className='AttdenceBody'>
        //         <AttendenceList/>
        //         <div className='AttdenceCilcle-container'>
        //             <div className='AttdenceCilcle'>
        //                 <h2>03</h2>
        //                 <h3>scheduled</h3>
        //             </div>
        //         </div>
        //         <div className='Attdencebtn'>
        //             <Link to='/StaffManagement' className='Link'>
        //                 <Button className='add-btn red'>List</Button>
        //             </Link>
        //             <Link to='/Staffform' className='Link'>
        //                 <Button className='add-btn blue'>
        //                     <SearchRoundedIcon/> Search
        //                 </Button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Attendence
