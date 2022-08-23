import React, {useState} from 'react'
import Formhead from './Formhead'
import Enrollment from '../../components/layout/Enrollment/index'
import Contact from '../../components/layout/Contact/index'
import { Button } from '@mui/material'
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack'
import '../Sidebar/sidebar.css'
import {Form, Formik} from "formik";
import {initialValuesChildForm} from "../../utils/initialValues/childForm";

function Childform() {
    const [initialValues, setInitialValues] = useState(initialValuesChildForm);
    return (
        <div className="row m-auto w-100">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-3 flex-row">
                        <h2 className="fs-5 fw-bold">Add Child Profile</h2>
                        <Button className="add-btn red w-auto h-auto">
                            <VideoCameraBackIcon />
                            <b>Videos:</b>:Adding & Editing Profiles
                        </Button>
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
                                        <Formhead />
                                        <Enrollment />
                                        <Contact />
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

export default Childform
