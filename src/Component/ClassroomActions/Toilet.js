import React, {useState} from "react";
import "./style.css";
// import {Button} from "@mui/material";
import {Formik} from "formik";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildToilet} from "../../services/childrens";
import {toast} from "react-toastify";
import InputField from "../Common/InputField";
// import RadioField from "../Common/RadioField";
import TextareaField from "../Common/TextareaField";
import SelectField from "../Common/SelectField";
import {useSelector} from "react-redux";

function Toilet() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({time: '', type: '', toilet: '', note: ''});
    return (
        <div className="card">
            <div className="card-header">
                Toilet
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        console.log(values);
                        const {time, type, toilet, note} = values;
                        let result = {
                            time: validateFirstName(time),
                            type: validateLastName(type),
                            toilet: validateLastName(toilet),
                            note: validateLastName(note),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1};
                            saveChildToilet(result).then((response) => {
                                if (response.success) {
                                    toast.success('Toilet completed successfully!', {
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
                                    <SelectField label="Type" name="type" className="w-100 mb-20">
                                        {[
                                            {label: "Diaper", value: 0},
                                            {label: "Potty", value: 1},
                                            {label: "Sat on Potty", value: 2},
                                            {label: "Underwear", value: 3},
                                        ].map((o) => {
                                            return (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            )
                                        })}
                                    </SelectField>
                                    <SelectField label="Toilet" name="toilet" className="w-100 mb-20">
                                        {[
                                            {label: "Dry", value: 0},
                                            {label: "Wet", value: 1},
                                            {label: "Bowel Movement", value: 2},
                                            {label: "Peed", value: 3},
                                            {label: "Applied Cream", value: 3},
                                            {label: "Had an Accident", value: 3},
                                        ].map((o) => {
                                            return (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            )
                                        })}
                                    </SelectField>
                                    <TextareaField
                                        label="Notes"
                                        name="note"
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

export default Toilet;
