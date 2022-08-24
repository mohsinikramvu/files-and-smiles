import React from "react"
import {useField} from "formik"

const SelectField = ({ label, className, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <div className={`form-group ${className && className}`}>
            <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} className="form-control" />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </div>
    );
};

export default SelectField