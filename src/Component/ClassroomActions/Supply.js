import React, {useState} from "react";
import "./style.css";
import {validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {saveChildSupply} from "../../services/childrens";
import {toast} from "react-toastify";
import TextareaField from "../Common/TextareaField";
import {Formik} from "formik";
import SelectField from "../Common/SelectField";
import {useSelector} from "react-redux";

function Supply() {
    const childID = useSelector(state => state.childs.childID);
    const [initialData, setInitialData] = useState({ supplies: 0, notes: ''});
    return (
        <div className="card">
            <div className="card-header">
                Supplies
            </div>
            <div className="card-body">
                <Formik
                    initialValues={initialData}
                    validate={values => {
                        console.log(values);
                        const {supplies, notes} = values;
                        let result = {
                            supplies: validateLastName(supplies),
                            notes: validateLastName(notes),
                        };
                        result = removeEmptyValues(result);
                        return result;
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        if (childID) {
                            const result = {...values, kid: childID, id: 1};
                            saveChildSupply(result).then((response) => {
                                if (response.success) {
                                    toast.success('Supplies completed successfully!', {
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
                                    <SelectField label="Supplies" name="supplies" className="w-100 mb-20">
                                        {[
                                            {label: "Diapers", value: 0},
                                            {label: "Wipes", value: 1},
                                            {label: "Cream", value: 2},
                                            {label: "Clothes", value: 3},
                                            {label: "Water Bottle", value: 4},
                                            {label: "Other", value: 5},
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
    );
}

export default Supply;
