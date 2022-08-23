import React, {useEffect, useState} from 'react'
import './layout.css'
import Sidebar from '../Component/Sidebar/sidebar'
import Content from '../Component/CenterSection/Content'
import Navbar from '../Component/NavBar/Navbar'

const Layout = () => {
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 30);
        });
    }, []);
    return (
        <>
            <div id="layout-wrapper">
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
            </div>
        </>
    )
}

export default Layout
