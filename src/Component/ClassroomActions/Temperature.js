import React, {useState} from "react";
// import {Button} from "@mui/material";

// import girls from "../ClassRoster/assests/girl.png";
import "./style.css";
import InputField from "../Common/InputField";
// import SelectField from "../Common/SelectField";
import {Formik} from "formik";
// import {brandList, quantityList} from "./AddEpi";
import TextareaField from "../Common/TextareaField";
import RadioField from "../Common/RadioField";
// import {useParams} from "react-router-dom";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildTemperature} from "../../services/childrens";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

const TemperatureComponent = () => {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({time: '', health: '', temperature: '', notes: ''});
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Temperature
                </div>
                <div className="card-body">
                    <Formik
                        initialValues={initialData}
                        validate={values => {
                            console.log(values);
                            const {time, health, temperature, notes} = values;
                            let result = {
                                time: validateFirstName(time),
                                health: validateLastName(health),
                                temperature: validateLastName(temperature),
                                notes: validateLastName(notes),
                            };
                            result = removeEmptyValues(result);
                            return result;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            if (childID) {
                                console.log(childID);
                                const result = {...values, kid: childID, id: 1};
                                console.log(result)
                                saveChildTemperature(result).then((response) => {
                                    if (response.success) {
                                        toast.success('Temperature completed successfully!', {
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
                                        <RadioField
                                            type="radio"
                                            label="Health"
                                            className="custom-radio mb-20"
                                            name="health"
                                            data={[{label: "Normal", value: 0}, {label: "Fever", value: 1}]}
                                        />
                                        <InputField
                                            type="text"
                                            name="temperature"
                                            placeholder="Enter Temperature"
                                            label="Temperature"
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
        </>
    );
};

export default TemperatureComponent;
