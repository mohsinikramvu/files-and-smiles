import React, {useState} from "react";
import "./style.css";
// import {Button} from "@mui/material";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildFluids} from "../../services/childrens";
import {toast} from "react-toastify";
import InputField from "../Common/InputField";
// import RadioField from "../Common/RadioField";
import TextareaField from "../Common/TextareaField";
import {Formik} from "formik";
import SelectField from "../Common/SelectField";
import {useSelector} from "react-redux";

function Fluids() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({time: '', fluid: 0, quantity: '', notes: ''});
    return (
        <div className="card">
            <div className="card-header">
                Fluids
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        console.log(values);
                        const {time, fluid, quantity, notes} = values;
                        let result = {
                            time: validateFirstName(time),
                            fluid: validateLastName(fluid),
                            quantity: validateLastName(quantity),
                            notes: validateLastName(notes),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1};
                            saveChildFluids(result).then((response) => {
                                if (response.success) {
                                    toast.success('Fluids completed successfully!', {
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
                                    <SelectField label="Fluid" name="fluid" className="w-100 mb-20">
                                        {[
                                            {label: "Milk", value: 0},
                                            {label: "Formula", value: 1},
                                            {label: "Breast Milk", value: 2},
                                            {label: "Water", value: 3},
                                            {label: "Other", value: 4},
                                        ].map((o) => {
                                            return (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            )
                                        })}
                                    </SelectField>
                                    <InputField
                                        type="text"
                                        name="quantity"
                                        placeholder="Enter Quantity"
                                        label="Quantity"
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

export default Fluids;
