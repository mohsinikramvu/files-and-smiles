import React from 'react'
import './staff.css'

// import img
import Img from '../../../assets/img/profile.png'

import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import WcIcon from '@mui/icons-material/Wc'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline'
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined'
import ListTwo from "../../Lists/ListTwo";
import UserListImg from "../../../assets/img/Card-img.jpg";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const Staff = () => {
    const childList = useSelector(state => state.childs.list);
    console.log(childList);
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12 mb-20">
                    <div className="card">
                        <div className="card-header">
                            <div className="list-head-one d-flex justify-content-between align-items-center flex-wrap gap-3 flex-wrap">
                                <h2 className="fs-5">Staff</h2>
                                <div className="staff-btn">
                                    <Button variant="contained">
                                        Hide&nbsp;Staff
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <table>
                                <tbody>
                                    <tr className='listTwo'>
                                        <td className='listTwo-one'>
                                            <img src={Img} alt='' className="rounded-pill" />
                                            <p>Sam Teacher</p>
                                        </td>
                                        <td className='listTwo-two'>
                                            <p>Not Present</p>
                                        </td>
                                        <td className='listTwo-three staff-btns'>
                                            <Button className='btn' variant='contained'>
                                                <svg
                                                    width='24'
                                                    height='24'
                                                    viewBox='0 0 24 24'
                                                    fill='none'
                                                    xmlns='http://www.w3.org/2000/svg'
                                                >
                                                    <path
                                                        d='M12.2646 4.13812e-05C8.09602 -0.0108925 4.42769 2.14582 2.33111 5.40413C2.23817 5.549 2.34204 5.74035 2.51425 5.74035H4.43589C4.5671 5.74035 4.6901 5.68294 4.77211 5.5818C4.96345 5.34946 5.16846 5.12531 5.38441 4.9121C6.27552 4.02372 7.31151 3.32395 8.46504 2.83739C9.65683 2.33443 10.9252 2.07748 12.2345 2.07748C13.5438 2.07748 14.8122 2.3317 16.004 2.83739C17.1575 3.32395 18.1935 4.02372 19.0846 4.9121C19.9757 5.80048 20.6727 6.83647 21.162 7.98726C21.6677 9.17906 21.9219 10.4447 21.9219 11.754C21.9219 13.0633 21.665 14.3289 21.162 15.5207C20.6755 16.6715 19.9757 17.7075 19.0846 18.5959C18.1935 19.4843 17.1575 20.184 16.004 20.6706C14.8112 21.1744 13.5293 21.4328 12.2345 21.4305C10.9252 21.4305 9.65683 21.1736 8.46504 20.6706C7.31377 20.1845 6.26761 19.48 5.38441 18.5959C5.16846 18.3799 4.96618 18.1558 4.77211 17.9262C4.6901 17.8251 4.56436 17.7676 4.43589 17.7676H2.51425C2.34204 17.7676 2.23544 17.959 2.33111 18.1039C4.42495 21.354 8.07688 23.508 12.2345 23.508C18.691 23.508 23.9338 18.3116 23.9994 11.8743C24.065 5.33306 18.814 0.0164423 12.2646 4.13812e-05ZM8.8018 14.8155V12.738H0.218678C0.0984052 12.738 0 12.6396 0 12.5194V10.9886C0 10.8684 0.0984052 10.7699 0.218678 10.7699H8.8018V8.6925C8.8018 8.50936 9.01501 8.40549 9.15715 8.52029L13.036 11.5818C13.0621 11.6022 13.0832 11.6284 13.0978 11.6582C13.1123 11.6881 13.1199 11.7208 13.1199 11.754C13.1199 11.7872 13.1123 11.8199 13.0978 11.8498C13.0832 11.8796 13.0621 11.9058 13.036 11.9262L9.15715 14.9877C9.01501 15.0998 8.8018 14.9986 8.8018 14.8155Z'
                                                        fill='#FEFEFE'
                                                    />
                                                </svg>
                                                Clock in
                                            </Button>
                                            <Button variant='contained'>
                                                <CalendarMonthIcon/>
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md-12 mb-20">
                    <div className="card">
                        <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
                            <div className="list-head-one d-flex flex-wrap gap-3 align-items-center">
                                <h2 className="fs-5">Children</h2>
                                <div className="d-flex gap-3 p-2 bg-secondary rounded">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault0" />
                                        <label className="form-check-label text-white" htmlFor="flexRadioDefault0">
                                            1
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                                            0
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                        <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                                            0
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                        <label className="form-check-label text-white" htmlFor="flexRadioDefault3">
                                            0
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className='children-btns d-flex gap-2'>
                                <Button variant='contained'>
                                    <NotificationsNoneOutlinedIcon className='Wc-icon'/>
                                </Button>
                                <Link to="/Childform" className="text-decoration-none">
                                    <Button variant='contained'>
                                        <WcIcon className='Wc-icon'/>
                                        Add Child
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="card-body">
                            <table>
                                <tbody>
                                {childList.length > 0 ? (
                                    childList.map((item) => {
                                        return (
                                            <tr className='listTwo'>
                                                <td className='listTwo-one'>
                                                    <div className="img-box">
                                                        <img src={item.profile_picture} alt='profile photo' className="rounded-pill" />
                                                    </div>
                                                    <p>{item.fullname}</p>
                                                </td>
                                                <td className='listTwo-two'>
                                                    <p>{item.checkin_status === 0 ? 'Not Present' : 'Present'}</p>
                                                </td>
                                                <td className='listTwo-three staff-btns'>
                                                    <Button className='btn' variant='contained'>
                                                        <svg
                                                            width='24'
                                                            height='24'
                                                            viewBox='0 0 24 24'
                                                            fill='none'
                                                            xmlns='http://www.w3.org/2000/svg'
                                                        >
                                                            <path
                                                                d='M12.2646 4.13812e-05C8.09602 -0.0108925 4.42769 2.14582 2.33111 5.40413C2.23817 5.549 2.34204 5.74035 2.51425 5.74035H4.43589C4.5671 5.74035 4.6901 5.68294 4.77211 5.5818C4.96345 5.34946 5.16846 5.12531 5.38441 4.9121C6.27552 4.02372 7.31151 3.32395 8.46504 2.83739C9.65683 2.33443 10.9252 2.07748 12.2345 2.07748C13.5438 2.07748 14.8122 2.3317 16.004 2.83739C17.1575 3.32395 18.1935 4.02372 19.0846 4.9121C19.9757 5.80048 20.6727 6.83647 21.162 7.98726C21.6677 9.17906 21.9219 10.4447 21.9219 11.754C21.9219 13.0633 21.665 14.3289 21.162 15.5207C20.6755 16.6715 19.9757 17.7075 19.0846 18.5959C18.1935 19.4843 17.1575 20.184 16.004 20.6706C14.8112 21.1744 13.5293 21.4328 12.2345 21.4305C10.9252 21.4305 9.65683 21.1736 8.46504 20.6706C7.31377 20.1845 6.26761 19.48 5.38441 18.5959C5.16846 18.3799 4.96618 18.1558 4.77211 17.9262C4.6901 17.8251 4.56436 17.7676 4.43589 17.7676H2.51425C2.34204 17.7676 2.23544 17.959 2.33111 18.1039C4.42495 21.354 8.07688 23.508 12.2345 23.508C18.691 23.508 23.9338 18.3116 23.9994 11.8743C24.065 5.33306 18.814 0.0164423 12.2646 4.13812e-05ZM8.8018 14.8155V12.738H0.218678C0.0984052 12.738 0 12.6396 0 12.5194V10.9886C0 10.8684 0.0984052 10.7699 0.218678 10.7699H8.8018V8.6925C8.8018 8.50936 9.01501 8.40549 9.15715 8.52029L13.036 11.5818C13.0621 11.6022 13.0832 11.6284 13.0978 11.6582C13.1123 11.6881 13.1199 11.7208 13.1199 11.754C13.1199 11.7872 13.1123 11.8199 13.0978 11.8498C13.0832 11.8796 13.0621 11.9058 13.036 11.9262L9.15715 14.9877C9.01501 15.0998 8.8018 14.9986 8.8018 14.8155Z'
                                                                fill='#FEFEFE'
                                                            />
                                                        </svg>
                                                        Check in
                                                    </Button>
                                                    <Button variant='contained'>
                                                        <CalendarMonthIcon/>
                                                    </Button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                ) : <p>There is no record exist in this classroom.</p>}
                                </tbody>
                            </table>
                            {/*{childList.length > 0 ? (*/}
                            {/*    childList.map((item) => {*/}
                            {/*        return (*/}
                            {/*            <div className='listTwo'>*/}
                            {/*                <div className='listTwo-one'>*/}
                            {/*                    <img src={item.profile_picture} alt='profile photo' />*/}
                            {/*                    <p>{item.fullname}</p>*/}
                            {/*                </div>*/}
                            {/*                <div className='listTwo-two'>*/}
                            {/*                    <p>{item.checkin_status === 0 ? 'Not Present' : 'Present'}</p>*/}
                            {/*                </div>*/}
                            {/*                <div className='listTwo-three staff-btns'>*/}
                            {/*                    <Button className='btn' variant='contained'>*/}
                            {/*                        <svg*/}
                            {/*                            width='24'*/}
                            {/*                            height='24'*/}
                            {/*                            viewBox='0 0 24 24'*/}
                            {/*                            fill='none'*/}
                            {/*                            xmlns='http://www.w3.org/2000/svg'*/}
                            {/*                        >*/}
                            {/*                            <path*/}
                            {/*                                d='M12.2646 4.13812e-05C8.09602 -0.0108925 4.42769 2.14582 2.33111 5.40413C2.23817 5.549 2.34204 5.74035 2.51425 5.74035H4.43589C4.5671 5.74035 4.6901 5.68294 4.77211 5.5818C4.96345 5.34946 5.16846 5.12531 5.38441 4.9121C6.27552 4.02372 7.31151 3.32395 8.46504 2.83739C9.65683 2.33443 10.9252 2.07748 12.2345 2.07748C13.5438 2.07748 14.8122 2.3317 16.004 2.83739C17.1575 3.32395 18.1935 4.02372 19.0846 4.9121C19.9757 5.80048 20.6727 6.83647 21.162 7.98726C21.6677 9.17906 21.9219 10.4447 21.9219 11.754C21.9219 13.0633 21.665 14.3289 21.162 15.5207C20.6755 16.6715 19.9757 17.7075 19.0846 18.5959C18.1935 19.4843 17.1575 20.184 16.004 20.6706C14.8112 21.1744 13.5293 21.4328 12.2345 21.4305C10.9252 21.4305 9.65683 21.1736 8.46504 20.6706C7.31377 20.1845 6.26761 19.48 5.38441 18.5959C5.16846 18.3799 4.96618 18.1558 4.77211 17.9262C4.6901 17.8251 4.56436 17.7676 4.43589 17.7676H2.51425C2.34204 17.7676 2.23544 17.959 2.33111 18.1039C4.42495 21.354 8.07688 23.508 12.2345 23.508C18.691 23.508 23.9338 18.3116 23.9994 11.8743C24.065 5.33306 18.814 0.0164423 12.2646 4.13812e-05ZM8.8018 14.8155V12.738H0.218678C0.0984052 12.738 0 12.6396 0 12.5194V10.9886C0 10.8684 0.0984052 10.7699 0.218678 10.7699H8.8018V8.6925C8.8018 8.50936 9.01501 8.40549 9.15715 8.52029L13.036 11.5818C13.0621 11.6022 13.0832 11.6284 13.0978 11.6582C13.1123 11.6881 13.1199 11.7208 13.1199 11.754C13.1199 11.7872 13.1123 11.8199 13.0978 11.8498C13.0832 11.8796 13.0621 11.9058 13.036 11.9262L9.15715 14.9877C9.01501 15.0998 8.8018 14.9986 8.8018 14.8155Z'*/}
                            {/*                                fill='#FEFEFE'*/}
                            {/*                            />*/}
                            {/*                        </svg>*/}
                            {/*                        Check in*/}
                            {/*                    </Button>*/}
                            {/*                    <Button variant='contained'>*/}
                            {/*                        <CalendarMonthIcon/>*/}
                            {/*                    </Button>*/}
                            {/*                </div>*/}
                            {/*            </div>*/}
                            {/*        )*/}
                            {/*    })*/}
                            {/*) : <p>There is no record exist in this classroom.</p>}*/}
                            <div className='end-btns'>
                                <Button variant='outlined'>
                                    <PeopleOutlineIcon className='icons'/>
                                    Enrollment
                                </Button>
                                <Button variant='outlined'>
                                    <PhotoSizeSelectActualOutlinedIcon className='icons'/>
                                    Photo journal
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Staff
