import React, {useLayoutEffect, useState} from "react"
import {NavLink, useLocation} from "react-router-dom";
import logo from "./../../assets/img/logo.PNG";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {useDispatch, useSelector} from "react-redux";
import {getAllClassroomsService} from "../../services/classrooms";
import allActions from "../../actions";
const Lists = [
    {
        id: 1,
        title: "Dashboard",
        icon: <ion-icon name="home"></ion-icon>,
        address: "/",
    },
    {
        id: 2,
        title: "Classroom ",
        icon: <ion-icon name="clipboard"></ion-icon>,
        address: "Staff",
        icon2: <ArrowForwardIosIcon className="class-room-icon"/>,
    },
    {
        id: 3,
        title: "Classroom Rosters",
        icon: <ion-icon name="bookmarks-outline"></ion-icon>,
        address: "EnrollmentTwo",
        icon2: <ArrowForwardIosIcon className="roster-icon"/>,
    },
    {
        id: 4,
        title: "Classroom Actions",
        icon: <ion-icon name="contract-outline"></ion-icon>,
        address: "classroom-actions",
        icon2: <ArrowForwardIosIcon className="roster-icon"/>,
    },
    {
        id: 5,
        title: "Messaging",
        icon: <ion-icon name="chatbubble-ellipses-outline"></ion-icon>,
        address: "Messages",
    },
    {
        id: 6,
        title: "Contact",
        icon: <ion-icon name="mail-outline"></ion-icon>,
        address: "Contacts",
    },
    {
        id: 7,
        title: "Staff management",
        icon: <ion-icon name="people-outline"></ion-icon>,
        address: "StaffRoster",
        icon2: <ArrowForwardIosIcon className="roster-icon"/>,
    },
    {
        id: 8,
        title: "Menus and Calender",
        icon: <ion-icon name="calendar-outline"></ion-icon>,
        address: "NewCalander",
    },
    {
        id: 9,
        title: "Reports",
        icon: <ion-icon name="browsers-outline"></ion-icon>,
        address: "Reports",
    },
    {
        id: 10,
        title: "Parents Sign In",
        icon: <ion-icon name="log-in-outline"></ion-icon>,
        address: "Parent",
        icon2: <ArrowForwardIosIcon className="parent-icon"/>,
    },
    {
        id: 11,
        title: "Logins and configuration",
        icon: <ion-icon name="log-in-outline"></ion-icon>,
        address: "Cards",
    },
    {
        id: 12,
        title: "Max Mallidius",
        icon: <ion-icon name="log-in-outline"></ion-icon>,
        address: "Max",
        icon2: <ArrowForwardIosIcon className="parent-icon"/>,
    },
    {
        id: 13,
        title: "Help Center",
        icon: <ion-icon name="help-outline"></ion-icon>,
        address: "Help",
    },
    {
        id: 14,
        title: "Management",
        icon: <ion-icon name="help-outline"></ion-icon>,
        address: "allergies-report",
        icon2: <ArrowForwardIosIcon className="parent-icon"/>,
    },
];
function Sidebar() {
    const [active, setActive] = useState(null);
    const handleClick = (index) => {
        let result = Lists.find((item, i) => index === i && item)
        setActive(result);
    };
    const location = useLocation();
    const dispatch = useDispatch();
    const clsList = useSelector(state => state.classrooms.list);
    useLayoutEffect(() => {
        let pathArr = location.pathname.split('/');
        let matchedPath = "/";
        if (pathArr.length > 1 && pathArr[pathArr.length - 1] !== "") {
            matchedPath = pathArr[pathArr.length - 1];
        }
        if (matchedPath) {
            const itemIndex = Lists.findIndex((list) => list.address === matchedPath);
            let result = Lists.find((item, i) => itemIndex === i && item)
            setActive(result);
        }
        if (clsList.length === 0) {
            getAllClassroomsService().then((response) => {
                if (response) {
                    dispatch(allActions.getAllClassrooms(response.data));
                }
            });
        }
    }, [location, dispatch, clsList.length])
    
    return (
        <div className="navigation">
            <NavLink to="/" className='d-block navbar-brand p-4 text-center'>
                <img src={logo} className="img-fluid img-thumbnail w-50" alt="logo" />
            </NavLink>
            <ul className="list-unstyled nav">
                {Lists.map((list, index) => {
                    return (
                        <li id={list.id} key={index} onClick={() => handleClick(index)} className={`nav-item ${active && active.address === list.address ? 'active' : ''} ${list.address === "allergies-report" && active && active.address === "allergies-report" ? "last-item" : ""}`}>
                            <NavLink to={list.address} className="nww d-flex justify-content-between gap-1">
                                <span className="d-flex align-items-center">
                                    <span className="icon">{list.icon}</span>
                                    <span className="title">{list.title}</span>
                                </span>
                                <span className="icon2">{list.icon2}</span>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;
