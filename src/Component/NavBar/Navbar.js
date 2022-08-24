import React, {useLayoutEffect, useState} from 'react'
import Profile from '../../assets/img/profile.png'
import '../NavBar/navbar.css'
import {useLocation} from "react-router-dom";
import SelectField from "../Common/SelectField";
import {useDispatch, useSelector} from "react-redux";
import {Form, Formik} from "formik";
import {getAllClassroomsService} from "../../services/classrooms";
//import allActions from "../../actions";
import {getAllChildBelongsToClass} from "../../services/childrens";
import childActions from "../../actions";
import classroomActions from "../../actions";

function Navbar(props) {
    const [address, setAddress] = useState("");
    const location = useLocation();
    const dispatch = useDispatch();
    useLayoutEffect(() => {
        let pathArr = location.pathname.split('/');
        let matchedPath = "/";
        if (pathArr.length > 1 && pathArr[pathArr.length - 1] !== "") {
            matchedPath = pathArr[pathArr.length - 1];
        }
        if (matchedPath) {
            setAddress(matchedPath);
        }
        getAllClassroomsService().then((response) => {
            if (response) {
                dispatch(classroomActions.getAllClassrooms(response.data));
            }
        });
    }, [location, dispatch])
    const list = useSelector(state => state.classrooms.list);
    const handleChange = (event) => {
        if (event.target.value !== 0) {
            getAllChildBelongsToClass(event.target.value).then((response) => {
                dispatch(childActions.getAllChilds(response.data));
            })
        }
    }
    return (
        <>
            <div className={`page-header Navbar-content px-5 d-flex flex-wrap justify-content-between align-items-center ${props.fixed ? 'position-fixed' : 'position-relative'}`}>
                <div className="header-content d-flex flex-column gap-3">
                    <h2>Wednesday, Apr 6</h2>
                    {address === "Staff" || address === "EnrollmentTwo" || address === "classroom-actions" ? (
                        <Formik
                            initialValues={{ classroom: 0 }}
                            onSubmit={(values) => {
                                console.log(values);
                            }}
                        >
                            {(values) => (
                                <>
                                    <Form onChange={handleChange} className="p-0">
                                        <SelectField label="" name="classroom" className="w-100 m-0">
                                            <option value={0}>Select a classroom</option>
                                            {list && list.length > 0 && list.map((o) => {
                                                return (
                                                    <option key={o.id} value={o.id}>{o.class_name}</option>
                                                )
                                            })}
                                        </SelectField>
                                        {/*<SubmitValue />*/}
                                    </Form>
                                </>
                            )}
                        </Formik>
                    ) : null}
                </div>
                <div className='img'>
                    <img src={Profile} alt="profile "/>
                </div>
            </div>
        </>
    )
}

export default Navbar
