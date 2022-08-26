import React from 'react';
// import {Button} from '@mui/material';
// import Container from '@mui/material/Container';
import './card.css';
import {Formik} from "formik";
import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";

// export const brandList = [
//     {value: 1, label: "Brand 1"},
//     {value: 2, label: "Brand 2"},
//     {value: 3, label: "Brand 3"},
// ]
//
// export const quantityList = [
//     {value: 1, label: "Quantity 1"},
//     {value: 2, label: "Quantity 2"},
//     {value: 3, label: "Quantity 3"},
// ]

const AddEpiComponent = () => {
    return (
        <div className="card-body border">
            <Formik
                initialValues={{epiPen: '', serial: '', brand: '', quantity: ''}}
                validate={values => {
                    console.log(values);
                }}
                onSubmit={(values, {setSubmitting}) => {
                    console.log(values);
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
                                    name="epiPen"
                                    placeholder="xxxxxxxxxxxx"
                                    label="Enter Epi Pen"
                                />
                                <InputField
                                    type="number"
                                    name="serial"
                                    placeholder="12345678"
                                    label="Serial"
                                />
                                <SelectField label="Brand" name="brand" className="w-100 mb-20">
                                    <option value={0}>Select a Brand</option>
                                    {[
                                        {value: 1, label: "Brand 1"},
                                        {value: 2, label: "Brand 2"},
                                        {value: 3, label: "Brand 3"},
                                    ].map((o) => {
                                        return (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        )
                                    })}
                                </SelectField>
                                <SelectField label="Quantity" name="quantity" className="w-100 mb-20">
                                    <option value={0}>Select a quantity</option>
                                    {[
                                        {value: 1, label: "Quantity 1"},
                                        {value: 2, label: "Quantity 2"},
                                        {value: 3, label: "Quantity 3"},
                                    ].map((o) => {
                                        return (
                                            <option key={o.value} value={o.value}>{o.label}</option>
                                        )
                                    })}
                                </SelectField>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-success select-all-btn">
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    )
}

export default AddEpiComponent