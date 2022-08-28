import React, {useState} from "react";
import "./style.css";
// import {Button} from "@mui/material";
import {validateFirstName, validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildFood} from "../../services/childrens";
import {toast} from "react-toastify";
import TextareaField from "../Common/TextareaField";
import {Formik} from "formik";
import {useSelector} from "react-redux";
import SelectField from "../Common/SelectField";

function Food() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({meal: 0, quantity: 0, food: ''});
    return (
        <div className="card">
            <div className="card-header">
                Food
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        const {meal, food} = values;
                        let result = {
                            meal: validateFirstName(meal),
                            food: validateLastName(food),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1};
                            saveChildFood(result).then((response) => {
                                if (response.success) {
                                    toast.success('Food completed successfully!', {
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
                                    <SelectField label="Meal" name="meal" className="w-100 mb-20">
                                        {[
                                            {label: "Breakfast", value: 0},
                                            {label: "Lunch", value: 1},
                                            {label: "Others", value: 2},
                                        ].map((o) => {
                                            return (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            )
                                        })}
                                    </SelectField>
                                    <SelectField label="Quantity" name="quantity" className="w-100 mb-20">
                                        {[
                                            {label: "All", value: 0},
                                            {label: "Most", value: 1},
                                            {label: "Some", value: 2},
                                            {label: "None", value: 3},
                                            {label: "Not applicable N/A", value: 4},
                                        ].map((o) => {
                                            return (
                                                <option key={o.value} value={o.value}>{o.label}</option>
                                            )
                                        })}
                                    </SelectField>
                                    <TextareaField
                                        label="Food"
                                        name="food"
                                        placeholder="Enter Food"
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

export default Food;
