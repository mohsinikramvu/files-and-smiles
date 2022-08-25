import React from "react";
import {Button} from "@mui/material";

// import girls from "../ClassRoster/assests/girl.png";
import "./style.css";
import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";
import {Formik} from "formik";
import {brandList, quantityList} from "./AddEpi";
import TextareaField from "../Common/TextareaField";
import RadioField from "../Common/RadioField";
import {useParams} from "react-router-dom";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildTemperature} from "../../services/childrens";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

const TemperatureComponent = () => {
    const childID = useSelector(state => state.childID);
    return (
        <>
            <div className="card">
                <div className="card-header">
                    Temperature
                </div>
                <div className="card-body">
                    <Formik
                        initialValues={{time: '', health: '', temperature: '', notes: ''}}
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
                                        {/*<SelectField label="Brand" name="brand" className="w-100 mb-20">*/}
                                        {/*    <option value={0}>Select a Brand</option>*/}
                                        {/*    {brandList.length > 0 && brandList.map((o) => {*/}
                                        {/*        return (*/}
                                        {/*            <option key={o.id} value={o.id}>{o.name}</option>*/}
                                        {/*        )*/}
                                        {/*    })}*/}
                                        {/*</SelectField>*/}
                                        {/*<SelectField label="Quantity" name="quantity" className="w-100 mb-20">*/}
                                        {/*    <option value={0}>Select a quantity</option>*/}
                                        {/*    {quantityList.length > 0 && quantityList.map((o) => {*/}
                                        {/*        return (*/}
                                        {/*            <option key={o.id} value={o.id}>{o.name}</option>*/}
                                        {/*        )*/}
                                        {/*    })}*/}
                                        {/*</SelectField>*/}
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
        // <div style={{backgroundColor: "white"}}>
        //     <div className="time-main">
        //         <h3 style={{marginLeft: "50px"}}>Temperature</h3> <br/>
        //         <input
        //             style={{marginLeft: "50px"}}
        //             type="text"
        //             className="inputs"
        //         />{" "}
        //         <br/>
        //         <div className="notes">
        //             <h2>Notes</h2>
        //             <input type="text"/>
        //         </div>
        //         <div className="create">
        //             <Button>Create Entry</Button>
        //         </div>
        //     </div>
        // </div>
    );
};

export default TemperatureComponent;
