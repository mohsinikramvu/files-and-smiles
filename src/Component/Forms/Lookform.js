import React from 'react'
import Button from '@mui/material/Button';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
import "./Lookform.css"
import {Form, Formik} from "formik";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import InputField from "../Common/InputField";
import FormHeader from "./FormHeader";
import RadioField from "../Common/RadioField";
import CheckboxField from "../Common/CheckboxField";
import SelectField from "../Common/SelectField";
import TextareaField from "../Common/TextareaField";
import FileField from "../Common/FileField";

function Lookform() {
    return (
        <div className='row m-auto w-100'>
            <div className='col-md-12'>
                <div className="card">
                    <FormHeader title="Child and Staff Profile Lookup" className="fs-5 fw-normal p-2" />
                    <Formik
                        initialValues={{ sendTo: "", permitPhotos: 0, year: "", sendVia: "", subject: "", message: "", attachment: "", template: ""}}
                        validate={(values) => {
                            const {firstName, lastName} = values;
                            let result = {
                                firstName: validateFirstName(firstName),
                                lastName: validateLastName(lastName)
                            };
                            result = removeEmptyValues(result);
                            return result;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            console.log(values, "hit submit");
                        }}>
                        {(values) => (
                            <>
                                <Form className="p-0">
                                    <div className="card-body p-4">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3">
                                                    <label className="form-label" htmlFor="sendTo">Send to:</label>
                                                    <RadioField
                                                        type="radio"
                                                        data={[
                                                            {label: "Child", value: "child"},
                                                            {label: "Classroom", value: "classroom"},
                                                            {label: "Center", value: "center"},
                                                            {label: "Age Group", value: "agrGroup"},
                                                            {label: "Staff Member", value: "staffMember"},
                                                            {label: "All Staff", value: "allStaff"},
                                                        ]}
                                                        name="sendTo"
                                                        className="custom-radio gap-5"
                                                    />
                                                </div>
                                                <CheckboxField
                                                    type="checkbox"
                                                    name="permitPhotos"
                                                    children="Include teachers on thread?"
                                                    className="checkbox-outline mb-3" />
                                            </div>
                                            <div className="col-md-6">
                                                <SelectField
                                                    label="Select Child"
                                                    data={[
                                                        {label: '2022', value: 2022}
                                                    ]}
                                                    className="w-100"
                                                    name="year"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body p-4 bg-light">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3">
                                                    <label className="form-label" htmlFor="sendVia">Send Via:</label>
                                                    <RadioField
                                                        type="radio"
                                                        data={[
                                                            {label: "Email", value: "email"},
                                                            {label: "SMS", value: "sms"},
                                                        ]}
                                                        name="sendVia"
                                                        className="custom-radio gap-5"
                                                    />
                                                </div>
                                                <InputField
                                                    label="Subject"
                                                    name="subject"
                                                    type="text"
                                                />
                                                <TextareaField
                                                    label="Message"
                                                    name="message"
                                                    cols="30"
                                                    rows="10"
                                                />
                                                <FileField
                                                    className="file-input"
                                                    label="Attach File"
                                                    type="file"
                                                    name="attachment"
                                                />
                                                <SelectField
                                                    label="Select Template"
                                                    data={[
                                                        {label: 'Template Options', value: 'templateOptions'}
                                                    ]}
                                                    className="w-100"
                                                    name="template"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <div className="staff-btn d-flex flex-wrap gap-3">
                                                <Button className="btn btn-primary" type="submit">Send</Button>
                                                <Button className="btn btn-outline-primary" type="button">Schedule Send</Button>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            </>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
        // <div className='lookup-container'>
        //     <div className='lookup-main'>
        //         <div className='Child-lookup'><h2>Child and Staff Profile Lookup</h2></div>
        //         <div>
        //             <div className='lookup-icon'>
        //                 <h3>Send to:</h3>
        //                 <div>
        //                     <input type="Radio"/>
        //                     <p>Child</p>
        //                 </div>
        //                 <div>
        //                     <input type="Radio"/>
        //                     <p>Classroom</p>
        //                 </div>
        //                 <div>
        //                     <input type="Radio"/>
        //                     <p>Center</p>
        //                 </div>
        //                 <div>
        //                     <input type="Radio"/>
        //                     <p>Age Group</p>
        //                 </div>
        //                 <div>
        //                     <input type="Radio"/>
        //                     <p>Staff Member</p>
        //                 </div>
        //                 <div>
        //                     <input type="Radio"/>
        //                     <p>All Staff</p>
        //                 </div>
        //             </div>
        //             <div className='teacher'>
        //                 <input type="checkbox"/>
        //                 <p>Include teachers on thread?</p>
        //             </div>
        //             <div className='dropdown'>
        //                 <h2>Select Child</h2>
        //                 <select name="cars" id="cars">
        //                     <option value="volvo">Nothing selected</option>
        //                     <option value="saab"></option>
        //                     <option value="mercedes"></option>
        //                     <option value="audi"></option>
        //                 </select>
        //             </div>
        //
        //         </div>
        //     </div>
        //     <div className='Send-via-container'>
        //         <div className='via'>
        //             <h2>Send via</h2>
        //             <input type="radio"/>
        //             <h3>Email</h3>
        //             <input type="radio"/>
        //             <h3>SMS</h3>
        //         </div>
        //         <div className='subject'>
        //             <h3>Subject</h3>
        //             <input/>
        //         </div>
        //         <div className='body-form'>
        //             <h3>Body</h3>
        //             <input/>
        //         </div>
        //         <div className='btn-last'>
        //             <Button type='file' variant="contained" style={{backgroundColor: '#5F5F5F'}}
        //                     endIcon={<AttachFileIcon/>}>
        //                 Attach file
        //             </Button>
        //         </div>
        //         <select name="cars" id="car">
        //             <option value="volvo">Template Options</option>
        //             <option value="saab"></option>
        //             <option value="mercedes"></option>
        //             <option value="audi"></option>
        //         </select>
        //         <div className='send-btn'>
        //             <Button className='send'>Send</Button>
        //             <Button className='Schedule'>Schedule Send</Button>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Lookform