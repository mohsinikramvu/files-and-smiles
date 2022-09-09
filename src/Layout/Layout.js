import React, {useEffect, useState} from 'react'
import './layout.css'
import Sidebar from '../Component/Sidebar/sidebar'
import Content from '../Component/CenterSection/Content'
import Navbar from '../Component/NavBar/Navbar'
import Login from "../Pages/Login/Login";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {ToastContainer} from "react-toastify";

const Layout = () => {
    const [scroll, setScroll] = useState(false);
    const userLoggedInStatus = useSelector(state => state.users.isLoggedInStatus);
    const state = useSelector(state => state);
    console.log(state);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 30);
        });
    }, []);
    const navigate = useNavigate();
    useEffect(() => {
        if (userLoggedInStatus && localStorage.getItem('token')) {
            document.getElementsByTagName("body")[0].classList.add("loggedIn");
            document.getElementsByTagName("body")[0].classList.remove("loggedOut");
            navigate("/")
        } else {
            document.getElementsByTagName("body")[0].classList.add("loggedOut");
            document.getElementsByTagName("body")[0].classList.remove("loggedIn");
            navigate("/login")
        }
    }, [userLoggedInStatus, navigate]);
    return (
        <>
            {userLoggedInStatus ? <div id="layout-wrapper">
                <div className="vertical-menu mm-active">
                    <Sidebar />
                </div>
    
                <div className="main-content">
                    <Navbar fixed={scroll} />
                    <div className={`page-content ${scroll ? 'header-fixed' : 'header-relative'}`}>
                        <div className="container-fluid bg-transparent">
                            <Content />
                        </div>
                    </div>
                </div>
            </div> : <Login className={userLoggedInStatus ? "bg-grey" : "bg-white"} />}
            <ToastContainer />
        </>
    )
}

export default Layout
