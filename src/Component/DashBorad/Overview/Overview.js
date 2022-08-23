import React from 'react'
import './Overview.css'
import {Link} from 'react-router-dom'
import SingleRow from '../CardSinglerRow/SingleRow'
import {Button} from '@mui/material'
import {useSelector} from "react-redux";

function Overview() {
    const list = useSelector(state => state.classrooms.list);
    return (
        <div className='d-flex flex-column flex-wrap gap-2 w-100'>
            <SingleRow
                cardRowTitle='Classrooms'
                Class='red cardbox'
                ActivityRowText={list !== null ? list.length : '0'}
            />
            <SingleRow
                cardRowTitle='Active Children'
                Class='blue cardbox'
                ActivityRowText='3'
            />
            <SingleRow
                cardRowTitle='Children per Class'
                Class='dark cardbox'
                ActivityRowText='1.0'
            />
            <SingleRow
                cardRowTitle='Parents per Child'
                Class='yellow cardbox'
                ActivityRowText='0/3'
            />
            <Button className='add-btn red'>
                <Link className='white' to='Childform'>Add&nbsp;Child</Link>
            </Button>
        </div>
    )
}

export default Overview
