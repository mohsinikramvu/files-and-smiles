import React, {useState} from "react";
import "./style.css";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildSleep} from "../../services/childrens";
import {toast} from "react-toastify";
import InputField from "../Common/InputField";
import TextareaField from "../Common/TextareaField";
import {Formik} from "formik";
import CheckboxField from "../Common/CheckboxField";
import {useSelector} from "react-redux";

function Sleep() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({start_time: '', end_time: '', sleep: 0, notes: ''});
    return (
        <div className="card">
            <div className="card-header">
                Sleep
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        const {start_time, end_time, notes} = values;
                        let result = {
                            start_time: validateFirstName(start_time),
                            end_time: validateLastName(end_time),
                            notes: validateLastName(notes),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1, sleep: values.sleep[0]};
                            saveChildSleep(result).then((response) => {
                                if (response.success) {
                                    toast.success('Sleep Activity completed successfully!', {
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
                    {({handleSubmit}) => (
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <InputField
                                        type="time"
                                        name="start_time"
                                        placeholder="xxxxxxxxxxxx"
                                        label="Start Time"
                                    />
                                    <InputField
                                        type="time"
                                        name="end_time"
                                        placeholder="xxxxxxxxxxxx"
                                        label="End Time"
                                    />
                                    <CheckboxField
                                        type="checkbox"
                                        name="sleep"
                                        children="Sleep Check"
                                        className="checkbox-outline mb-3" />
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

export default Sleep;
