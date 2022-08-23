import React, {useState} from 'react'
import './form1.css'
import SettingsIcon from '@mui/icons-material/Settings';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import {Form, Formik} from "formik";
import {initialValuesChildForm} from "../../utils/initialValues/childForm";
import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";
import RadioField from "../Common/RadioField";
import CheckboxField from "../Common/CheckboxField";
import {Button} from "@mui/material";

const CenterForm = () => {
    return (
        <>
            <div className="row">
                <div className="col-md-6">
                    <InputField
                        type='number'
                        name="phoneNumber"
                        label="Phone Number"
                    />
                    <SelectField
                        className="w-100"
                        data={[]}
                        name="timeZone"
                        label="Time Zone"
                    />
                    <SelectField
                        className="w-100"
                        data={[]}
                        name="autoSendReports"
                        label="Auto Send Reports"
                    />
                </div>
                <div className="col-md-12">
                    <large><b>Strongly Recommended.</b> Set an automated back-up for your daily reports. Any open
                        reports will be sent to your center at this time and all corresponding children and
                        staff will be signed out. The system won't send duplicates for reports that have already
                        been sent.</large>
                </div>
                <div className="col-md-12">
                    <h4 className="py-3">PARENT SIGN IN & PICK UP</h4>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-between gap-3 flex-wrap">
                        <div className="parent-values">
                            <RadioField
                                label="Parent Sign-in Identification"
                                type="radio"
                                data={[
                                    {label: "No Identification Collected", value: "No Identification Collected"},
                                    {label: "Name/Initials (Typed)", value: "Name/Initials (Typed)"},
                                    {label: "Electronic Signature", value: "Electronic Signature"},
                                ]}
                                name="parentIdentification"
                                className="custom-radio d-flex flex-column flex-wrap gap-3"
                            />
                        </div>
                        <div className="parent-values">
                            <RadioField
                                label="Child Name Display"
                                type="radio"
                                data={[
                                    {label: "First Name and Full Last Name (e.g., \"Jane Doe\")", value: "First Name and Full Last Name"},
                                    {label: "First Name and Last Initial (e.g., \"Jane D.\")", value: "First Name and Last Initial"},
                                ]}
                                name="childNameDisplay"
                                className="custom-radio d-flex flex-column flex-wrap gap-3"
                            />
                        </div>
                    </div>
                </div>
                <div className="col-md-12 parent-sign-children">
                    <h4 className="py-3">Parents can sign child in via app</h4>
                    <CheckboxField
                        type="checkbox"
                        name="parentsSignChildren"
                        children="If checked, parents will have the ability to sign children in from within the HiMama mobile app at the beginning of the day. If left unchecked, parents will not have this option.Parents must have downloaded and logged into the mobile app on their device."
                        className="mb-3 d-flex flex-row" />
                </div>
                <div className="col-md-12 parent-sign-children">
                    <h4 className="py-3">Safe Pickup</h4>
                    <CheckboxField
                        type="checkbox"
                        name="safePickup"
                        children="If checked, parents will have the ability to mark children as ready for pick up from within the HiMama mobile app at the end of the day. If left unchecked, parents will not have this option.Parents must have downloaded and logged into the mobile app on their device. For more info on this feature read ourHelp Center article."
                        className="mb-3 d-flex flex-row" />
                </div>
                <div className="col-md-12 parent-sign-children">
                    <h4 className="py-3">Classroom Access</h4>
                    <CheckboxField
                        type="checkbox"
                        name="classroomAccess"
                        children="if checked, teachers can access all classrooms. If unchecked, a teacher will only have access to their homeroom; as a result, temporarily moving children must be performed by an administrator. Default is checked."
                        className="mb-3 d-flex flex-row" />
                </div>
                <div className="col-md-12 parent-sign-children">
                    <h4 className="py-3">Parents can mark child absent in app</h4>
                    <CheckboxField
                        type="checkbox"
                        name="parentsMarkChildren"
                        children="if checked, parents will have the ability to mark their children absent from within the HiMama mobile app at the beginning of the day. If left unchecked, parents will not have this option and the center will be fully responsible for marking absent. Please note, teachers will still be able to mark children absent even if this feature is enabled. Parents must have downloaded and logged into the mobile app on their device."
                        className="mb-3 d-flex flex-row" />
                </div>
                <div className="col-md-12 parent-sign-children">
                    <h4 className="py-3">Teacher editable time cards?</h4>
                    <CheckboxField
                        type="checkbox"
                        name="teacherEditableTime"
                        children="Check this off if you want to allow teachers to edit their own time cards. Otherwise, time cards must be edited by an administrator."
                        className="mb-3 d-flex flex-row" />
                </div>
                <div className="col-md-12 parent-sign-children">
                    <h4 className="py-3">Is a full week center?</h4>
                    <CheckboxField
                        type="checkbox"
                        name="fullWeekCenter"
                        children="Check this off if your center runs 7 days a week. This will expand the Activity Planner to include Saturday & Sunday. Otherwise, it will default to the standard Monday-Friday work week."
                        className="mb-3 d-flex flex-row" />
                    <Button variant="contained" className="btn btn-danger">Save</Button>
                </div>
            </div>
        </>
    )
}

function Form1() {
    const [initialValues, setInitialValues] = useState(initialValuesChildForm);
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header p-0 bg-transparent d-flex align-items-center gap-3 flex-wrap w-100 flex-row">
                            <div className='setting-icon'>
                                <SettingsIcon className='icon'/>
                            </div>
                            <div className="d-flex justify-content-between align-items-center gap-3 flex-wrap">
                                <p className='head-data-para m-0'>Center Settings</p>
                                <ArrowCircleDownIcon className='head-data-arrow'/>
                            </div>
                        </div>
                        <div className="card-body">
                            <Formik
                                initialValues={initialValues}
                                validate={(values) => {
                                    // const {name} = values;
                                    // let result = {
                                    //     name: validateFirstName(name),
                                    // };
                                    // result = removeEmptyValues(result);
                                    // return result;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    console.log(values, "hit submit");
                                }}
                            >
                                {(values) => (
                                    <>
                                        <Form>
                                            <CenterForm />
                                        </Form>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Form1