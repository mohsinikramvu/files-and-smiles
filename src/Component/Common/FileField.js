import React from 'react';
import { useField } from 'formik';

const FileField = ({ label, className, imageName, ...props }) => {
    // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
    // which we can spread on <input>. We can use field meta to show an error
    // message if the field is invalid and it has been touched (i.e. visited)
    const [field, meta] = useField(props);
    return (
        <>
            <div className={`form-group mb-3 ${className && className}`}>
                <label className="form-label cursor-pointer" htmlFor={props.id || props.name}>
                    {label}
                </label>
                <input className="form-control text-input inputs" {...field} {...props} />
                {meta.touched && meta.error ? (
                    <div className="error text-danger">{meta.error}</div>
                ) : null}
            </div>
        </>
    );
};

export default FileField

