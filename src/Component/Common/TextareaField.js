import React from 'react';
import { useField } from 'formik';

const TextareaField = ({ label, className, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <div className={`form-group mb-3 ${className && className}`}>
                <label className="form-label" htmlFor={props.id || props.name}>{label}</label>
                <textarea {...field} {...props} className="form-control text-input inputs">{field.value}</textarea>
                {meta.touched && meta.error ? (
                    <div className="error text-danger">{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

export default TextareaField

