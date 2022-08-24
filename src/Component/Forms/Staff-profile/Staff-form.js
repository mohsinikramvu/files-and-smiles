import React, {useEffect, useState} from 'react'
import {Button} from '@mui/material'
import './staff1.css'
import { Formik, Form } from 'formik';
import InputField from "../../Common/InputField";
import {
    initialValuesStaffForm
} from "../../../utils/initialValues/staffForm";
import {
    validateFirstName,
    validateLastName
} from "../../../utils/validations/validateStaffForm";
import {
    removeEmptyValues
} from "../../../utils/removeEmptyValues";
// import SelectField from "../../Common/SelectField";

function Staffform() {
    const [initialValues, setInitialValues] = useState({});
    useEffect(() => {
        setInitialValues(initialValuesStaffForm);
    }, [])
    return (
        <div className='row m-auto w-100'>
            <div className='col-md-12'>
                <div className="card">
                    <div className="card-header">
                        <h2 className='fs-5'>Child and Staff Profile Lookup</h2>
                    </div>
                    <div className="card-body p-4 bg-secondary">
                        <p>Enter the child's or staff's first and last name</p>
                        <Formik
                            initialValues={initialValues}
                            validate={(values) => {
                                const {firstName, lastName, classrooms} = values;
                                let result = {
                                    firstName: validateFirstName(firstName),
                                    lastName: validateLastName(lastName),
                                    classrooms: validateLastName(classrooms),
                                };
                                result = removeEmptyValues(result);
                                return result;
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                console.log(values, "hit submit");
                            }}
                        >
                            {(values) => (
                                <>
                                    <Form className="p-0">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <InputField
                                                    label="First Name"
                                                    name="firstName"
                                                    type="text"
                                                    placeholder="Jane"
                                                />
                                            </div>
                                            <div className="col-md-12">
                                                <InputField
                                                    label="Last Name"
                                                    name="lastName"
                                                    type="text"
                                                    placeholder="Doe"
                                                />
                                            </div>
                                            <div className="col-md-12 mb-3">
                                                <div className="staff-btn">
                                                    <Button className="btn btn-primary" type="submit">Search</Button>
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
        </div>
    )
}

export default Staffform
