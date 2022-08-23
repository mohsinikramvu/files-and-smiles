import React from 'react'
import './enrollment.css'

import Container from '@mui/material/Container'
import SelectField from "../../../Component/Common/SelectField";
import RadioField from "../../../Component/Common/RadioField";
import CheckboxField from "../../../Component/Common/CheckboxField";
import FormHeader from "../../../Component/Forms/FormHeader";
import {useSelector} from "react-redux";

const Enrollment = () => {
    const list = useSelector(state => state.classrooms.list);
    return (
        <React.Fragment>
            <Container maxWidth='x-lg p-4'>
                <FormHeader title="Enrollment" />
                <div className="enrollment-form p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <SelectField
                                label="Classroom"
                                data={list !== null ? list : []}
                                className="w-100"
                                name="classRoomName"
                            />
                            <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3">
                                <label className="form-label" htmlFor="status">Status</label>
                                <RadioField
                                    type="radio"
                                    data={[
                                        {label: "Active", value: "active"},
                                        {label: "Not active (Upcoming/Graduated)", value: "not-active"},
                                    ]}
                                    name="status"
                                    className="custom-radio"
                                />
                            </div>
                            <label className="form-label" htmlFor="dob">Date of Birth</label>
                            <div className="row">
                                <div className="col-md-4">
                                    <SelectField
                                        label=""
                                        data={[
                                            {label: '11', value: 11}
                                        ]}
                                        className="w-100"
                                        name="day"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <SelectField
                                        label=""
                                        data={[
                                            {label: 'Apr', value: 'apr'}
                                        ]}
                                        className="w-100"
                                        name="month"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <SelectField
                                        label=""
                                        data={[
                                            {label: '2022', value: 2022}
                                        ]}
                                        className="w-100"
                                        name="year"
                                    />
                                </div>
                            </div>
                            <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3">
                                <label className="form-label" htmlFor="timing">Rotation</label>
                                <RadioField
                                    type="radio"
                                    data={[
                                        {label: "Morning", value: "morning"},
                                        {label: "Afternoon", value: "afternoon"},
                                        {label: "Before & After School", value: "beforeAfterSchool"},
                                    ]}
                                    name="timing"
                                    className="custom-radio"
                                />
                            </div>
                            <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3">
                                <label className="form-label mb-0" htmlFor="days">Schedule</label>
                                <CheckboxField
                                    type="checkbox"
                                    name="monday"
                                    children="Mon" />
                                <CheckboxField
                                    type="checkbox"
                                    name="tuesday"
                                    children="Tue" />
                                <CheckboxField
                                    type="checkbox"
                                    name="Wednesday"
                                    children="wed" />
                                <CheckboxField
                                    type="checkbox"
                                    name="Thursday"
                                    children="thu" />
                                <CheckboxField
                                    type="checkbox"
                                    name="Friday"
                                    children="Fri" />
                                <CheckboxField
                                    type="checkbox"
                                    name="Saturday"
                                    children="sat" />
                                <CheckboxField
                                    type="checkbox"
                                    name="Sunday"
                                    children="sun" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*<form className='enrollment-form'>*/}
                {/*    <div className=''>*/}
                {/*        <div className='form-radio' style={{marginTop: '10px'}}>*/}
                {/*            <label>Schedule</label>*/}
                {/*            <input type="checkbox" name="days" value="mon" checked/> Mon*/}
                {/*            <input type="checkbox" name="days" value="tue"/> Tue*/}
                {/*            <input type="checkbox" name="days" value="wed"/> Wed*/}
                {/*            <input type="checkbox" name="days" value="thu"/> Thu*/}
                {/*            <input type="checkbox" name="days" value="fri"/> Fri*/}
                {/*            <input type="checkbox" name="days" value="sat"/> Sat*/}
                {/*            <input type="checkbox" name="days" value="sun"/> Sun*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</form>*/}
            </Container>
        </React.Fragment>
    )
}

export default Enrollment