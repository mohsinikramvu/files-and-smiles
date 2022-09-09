import React from 'react'
import Profile from '../../assets/img/profile.png'
import '../NavBar/navbar.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllChildBelongsToClass} from "../../services/childrens";
import allActions from "../../actions";
import {Button} from "@mui/material";
import dayjs from "dayjs";

function Navbar(props) {
    const currentDate = dayjs(new Date()).format("DD/MM/YYYY");
    const monthDate = dayjs(new Date()).format("MMM DD");
    const getDayName = (dateStr, locale) => {
      let date = new Date(dateStr);
      return date.toLocaleDateString(locale, { weekday: 'long' });
    }
    const day = getDayName(currentDate, "en");
    const dispatch = useDispatch();
    const list = useSelector(state => {
        if (state.classrooms) {
            return state.classrooms.list;
        }
        return undefined;
    });
    const classID = useSelector(state => state.classrooms.classroomID);
    const userLoggedInStatus = useSelector(state => state.users.isLoggedInStatus);
    const handleChange = (event) => {
        dispatch(allActions.putClassroomID(event.target.value));
        getAllChildBelongsToClass(event.target.value).then((response) => {
            dispatch(allActions.getAllChilds(response.data));
        })
    }
    const handleLogOut = () => {
        dispatch(allActions.logoutUser());
    }
    return (
        <>
            <div className={`page-header Navbar-content px-5 d-flex flex-wrap justify-content-between align-items-center ${props.fixed ? 'position-fixed' : 'position-relative'}`}>
                <div className="header-content d-flex flex-column">
                    <h2>{day}, {monthDate}</h2>
                    <select name="classroom" id="classroom" className="form-control" onChange={handleChange} value={classID}>
                        <option value={0}>Select a classroom</option>
                        {list && list.length > 0 && list.map((o) => {
                            return (
                                <option key={o.id} value={o.id}>{o.class_name}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="d-flex flex-row justify-content-center gap-3 align-items-center">
                    {userLoggedInStatus && <Button className='add-btn red' onClick={handleLogOut}>Log Out</Button>}
                    <div className='img'>
                        <img src={Profile} alt="profile "/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
