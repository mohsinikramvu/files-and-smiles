import React, {useState} from "react";
import "./style.css";
import {validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildNotes} from "../../services/childrens";
import {toast} from "react-toastify";
import InputField from "../Common/InputField";
import TextareaField from "../Common/TextareaField";
import {Formik} from "formik";
import {useSelector} from "react-redux";

function Note() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({ type: "", notes: ''});
    return (
        <div className="card">
            <div className="card-header">
                Notes
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        console.log(values);
                        const {type, notes} = values;
                        let result = {
                            type: validateLastName(type),
                            notes: validateLastName(notes),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1};
                            saveChildNotes(result).then((response) => {
                                if (response.success) {
                                    toast.success('Notes completed successfully!', {
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
                                        type="text"
                                        name="type"
                                        placeholder="Enter Type"
                                        label="Type"
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

export default Note;
