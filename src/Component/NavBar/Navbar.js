import React, {useEffect, useLayoutEffect, useState} from 'react'
import Profile from '../../assets/img/profile.png'
import '../NavBar/navbar.css'
// import {useLocation} from "react-router-dom";
import SelectField from "../Common/SelectField";
import {useDispatch, useSelector} from "react-redux";
import {Form, Formik} from "formik";
// import {getAllClassroomsService} from "../../services/classrooms";
//import allActions from "../../actions";
import {getAllChildBelongsToClass} from "../../services/childrens";
import allActions from "../../actions";

function Navbar(props) {
    // const [initialValues, setInitialValues] = useState({classroom: 0})
    const dispatch = useDispatch();
    const list = useSelector(state => {
        if (state.classrooms) {
            return state.classrooms.list;
        }
        return undefined;
    });
    const classID = useSelector(state => state.classrooms.classroomID);
    const handleChange = (event) => {
        dispatch(allActions.putClassroomID(event.target.value));
        getAllChildBelongsToClass(event.target.value).then((response) => {
            dispatch(allActions.getAllChilds(response.data));
        })
    }
    // useEffect(() => {
    //     if (classID) {
    //         setInitialValues({
    //             classroom: parseInt(classID)
    //         })
    //     }
    // }, [classID]);
    return (
        <>
            <div className={`page-header Navbar-content px-5 d-flex flex-wrap justify-content-between align-items-center ${props.fixed ? 'position-fixed' : 'position-relative'}`}>
                <div className="header-content d-flex flex-column">
                    <h2>Wednesday, Apr 6</h2>
                    <select name="classroom" id="classroom" className="form-control" onChange={handleChange} value={classID}>
                        <option value={0}>Select a classroom</option>
                        {list && list.length > 0 && list.map((o) => {
                            return (
                                <option key={o.id} value={o.id}>{o.class_name}</option>
                            )
                        })}
                    </select>
                    {/*<SelectField label="" name="classroom" className="w-100 m-0" onChange={handleChange}>*/}
                    {/*    <option value={0}>Select a classroom</option>*/}
                    {/*    {list && list.length > 0 && list.map((o) => {*/}
                    {/*        return (*/}
                    {/*            <option key={o.id} value={o.id}>{o.class_name}</option>*/}
                    {/*        )*/}
                    {/*    })}*/}
                    {/*</SelectField>*/}
                    {/*{*/}
                    {/*    address === "Staff" ||*/}
                    {/*    address === "EnrollmentTwo" ||*/}
                    {/*    address === "classroom-actions" ||*/}
                    {/*    address === "activity" ||*/}
                    {/*    address === "health" ||*/}
                    {/*    address === "temperature" ||*/}
                    {/*    address === "fluids" ||*/}
                    {/*    address === "food" ||*/}
                    {/*    address === "sleep" ||*/}
                    {/*    address === "toilet" ||*/}
                    {/*    address === "mood" ||*/}
                    {/*    address === "supplies" ||*/}
                    {/*    address === "notes" ||*/}
                    {/*    address === "checkout" ? (*/}
                    {/*    <Formik*/}
                    {/*        initialValues={initialValues}*/}
                    {/*        onSubmit={(values) => {*/}
                    {/*            console.log(values);*/}
                    {/*        }}*/}
                    {/*    >*/}
                    {/*        {(values) => (*/}
                    {/*            <>*/}
                    {/*                <Form onChange={handleChange} className="p-0">*/}
                    {/*                    <SelectField label="" name="classroom" className="w-100 m-0">*/}
                    {/*                        <option value={0}>Select a classroom</option>*/}
                    {/*                        {list && list.length > 0 && list.map((o) => {*/}
                    {/*                            return (*/}
                    {/*                                <option key={o.id} value={o.id}>{o.class_name}</option>*/}
                    {/*                            )*/}
                    {/*                        })}*/}
                    {/*                    </SelectField>*/}
                    {/*                </Form>*/}
                    {/*            </>*/}
                    {/*        )}*/}
                    {/*    </Formik>*/}
                    {/*) : null}*/}
                </div>
                <div className='img'>
                    <img src={Profile} alt="profile "/>
                </div>
            </div>
        </>
    )
}

export default Navbar
