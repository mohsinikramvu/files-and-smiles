import React from 'react'

import Card from '../../Component/DashBorad/Card/Card'
import Active from '../../Component/DashBorad/Active/Active'
import Overview from '../../Component/DashBorad/Overview/Overview'
import Attendence from '../../Component/DashBorad/Attendence/Attendence'
import SMcard2 from '../../Component/DashBorad/staff-management-card2'
import ResentMessage from '../../Component/DashBorad/Recent-message/Resent-message'
import RecentComments from '../../Component/DashBorad/RecentComments/RecentComments'
import RecentPhotos from '../../Component/DashBorad/Recent-Photos/Recent-Photos'
import {Link} from "react-router-dom"
import {Button} from '@mui/material'
import './mainPage.css'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'

function MainPage() {
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-6 mb-20">
                            <Card
                                headTitle='Activity'
                                headIcon={<CircleOutlinedIcon className='circleIcon w-75 h-75' width="30px" height="30px" />}
                                cardbody={<Active/>}
                                className='card h-100'
                            />
                        </div>
                        <div className="col-md-6 mb-20">
                            <Card
                                headTitle='Overview'
                                headIcon={
                                    <svg
                                        className="w-75 h-75"
                                        width='25'
                                        height='25'
                                        viewBox='0 0 25 25'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            fillRule='evenodd'
                                            clipRule='evenodd'
                                            d='M0.892857 25H25V23.2143H1.78571V0H0V24.1071L0.892857 25ZM3.57143 20.5357V6.25L4.46429 5.35714H8.03571L8.92857 6.25V20.5357L8.03571 21.4286H4.46429L3.57143 20.5357ZM7.14286 19.6429V7.14286H5.35714V19.6429H7.14286ZM17.8571 2.67857V20.5357L18.75 21.4286H22.3214L23.2143 20.5357V2.67857L22.3214 1.78571H18.75L17.8571 2.67857ZM21.4286 3.57143V19.6429H19.6429V3.57143H21.4286ZM10.7143 20.5357V9.82143L11.6071 8.92857H15.1786L16.0714 9.82143V20.5357L15.1786 21.4286H11.6071L10.7143 20.5357ZM14.2857 19.6429V10.7143H12.5V19.6429H14.2857Z'
                                            fill='black'
                                        />
                                    </svg>}
                                cardbody={<Overview/>}
                                className='card h-100'
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-5 mb-20">
                    <Attendence className='Attdence h-100'/>
                </div>
            </div>
            <div className='row w-100 m-auto'>
                <div className="col-md-8 mb-20">
                    <div className='card Staff-management-left'>
                        <div className='card-header staff-management-header bg-transparent border-0'>
                            <h2>Staff Management & Ratios</h2>
                            <a href='http://'>Weekly Ratios</a>
                        </div>
                        <div className='card-body staff-management-body'>
                            <div className="card-list-detail gap-3">
                                {/*<SMcard1/>*/}
                                <div className="d-flex flex-wrap flex-row justify-content-center align-items-center">
                                    <SMcard2 style={{ borderTopRightRadius: '0px' }} />
                                    <SMcard2 style={{ borderTopLeftRadius: '0px' }} head='All' />
                                </div>
                                <SMcard2 head='001'/>
                                <SMcard2 head='002'/>
                                <SMcard2 head='003'/>
                            </div>
                            <div className='staff-management-btn'>
                                <div className='Attdencebtn gap-3'>
                                    <Link to="/StaffRoster" className='Link'>
                                        <Button className='add-btn red'>View Staff</Button>
                                    </Link>
                                    <Button className='add-btn blue'>Refresh</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-20">
                    <div className='Staff-management-right'>
                        <ResentMessage/>
                    </div>
                </div>
            </div>
            <div className="row w-100 m-auto">
                <div className="col-md-12 mb-20">
                    <div className='Recent-comments'>
                        <RecentComments/>
                    </div>
                </div>
            </div>
            <div className="row w-100 m-auto">
                <div className="col-md-12 mb-20">
                    <div className='Recent-Photos'>
                        <RecentPhotos/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPage
