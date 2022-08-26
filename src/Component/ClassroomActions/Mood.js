import React, {useState} from "react";
// import {Button} from "@mui/material";

// import girls from "../ClassRoster/assests/girl.png";
import "./style.css";
import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";
import {Formik} from "formik";
// import {brandList, quantityList} from "./AddEpi";
import TextareaField from "../Common/TextareaField";
// import RadioField from "../Common/RadioField";
// import {useParams} from "react-router-dom";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildMood} from "../../services/childrens";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

const Mood = () => {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({mood: 0, level: 0, notes: ''});
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Mood
                </div>
                <div className="card-body">
                    <Formik
                        initialValues={initialData}
                        validate={values => {
                            console.log(values);
                            const {mood, level, notes} = values;
                            let result = {
                                mood: validateFirstName(mood),
                                level: validateLastName(level),
                                notes: validateLastName(notes),
                            };
                            result = removeEmptyValues(result);
                            return result;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            if (childID) {
                                const result = {...values, kid: childID, id: 1};
                                saveChildMood(result).then((response) => {
                                    if (response.success) {
                                        toast.success('Mood completed successfully!', {
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
                                            type="number"
                                            name="mood"
                                            placeholder="xxxxxxxxxxxx"
                                            label="Mood"
                                        />
                                        <SelectField label="Level" name="level" className="w-100 mb-20">
                                            {[
                                                {label: "Slightly", value: 0},
                                                {label: "Somewhat", value: 1},
                                                {label: "Very", value: 2},
                                                {label: "Extremely", value: 3},
                                                {label: "N/A", value: 4}
                                            ].map((o) => {
                                                return (
                                                    <option key={o.value} value={o.value}>{o.label}</option>
                                                )
                                            })}
                                        </SelectField>
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
        </>
    );
};

export default Mood;
