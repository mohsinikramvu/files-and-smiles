import React from 'react'
import './AttendenceList.css'
import AttendenceRow from '../AttendenceRow/AttendenceRow'

function AttendenceList() {
  return (
    <div className='d-flex flex-wrap flex-column'>
        <AttendenceRow 
            attdendenceRowTitle="Checked In"
            Class="green cardbox "
            AttendenceRowText="0"
        />
        <AttendenceRow 
            attdendenceRowTitle="Checked&nbsp;Out"
            Class="red cardbox "
            AttendenceRowText="0"
        />
        <AttendenceRow 
            attdendenceRowTitle="Absent"
            Class="grey cardbox "
            AttendenceRowText="0"
        />
        <AttendenceRow 
            attdendenceRowTitle="No Present"
            Class="blue cardbox "
            AttendenceRowText="3"
        />
    </div>
  )
}

export default AttendenceList