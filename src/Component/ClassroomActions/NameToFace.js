import React, {useState} from "react";
import "./style.css";
import {validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildNameToFace} from "../../services/childrens";
import {toast} from "react-toastify";
import InputField from "../Common/InputField";
import TextareaField from "../Common/TextareaField";
import {Formik} from "formik";
import {useSelector} from "react-redux";

function NameToFace() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({ time: "", notes: ''});
    return (
        <div className="card">
            <div className="card-header">
                Name to Face
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        console.log(values);
                        const {time, notes} = values;
                        let result = {
                            time: validateLastName(time),
                            notes: validateLastName(notes),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1};
                            saveChildNameToFace(result).then((response) => {
                                if (response.success) {
                                    toast.success('Name to Face completed successfully!', {
                                        position: "top-right",
                                        autoClose: 5000,
                                        hideProgressBar: false,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                    });
                                    setInitialData(initialData);
                                    return undefined;
                                }
                            });
                        } else {
                            toast.error('Please select child from the list below!', {
                                position: "top-right",
                                autoClose: 5000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                            });
                            return undefined;
                        }
                    }}
                >
                    {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                        }) => (
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <InputField
                                        type="time"
                                        name="time"
                                        placeholder="xxxxxxxxxxxx"
                                        label="Time"
                                    />
                                    <TextareaField
                                        label="Notes"
                                        name="notes"
                                        placeholder="Enter Notes"
                                    />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success select-all-btn">
                                Submit
                            </button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default NameToFace;
