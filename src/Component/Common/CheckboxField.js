import React from 'react';
import { useField } from 'formik';

const styleCheckboxField = {
    width: '1.5em',
    height: '1.5em',
    margin: '0',
}

const CheckboxField = ({ children, className, ...props }) => {
    // React treats radios and checkbox inputs differently other input types, select, and textarea.
    // Formik does this too! When you specify `type` to useField(), it will
    // return the correct bag of props for you -- a `checked` prop will be included
    // in `field` alongside `name`, `value`, `onChange`, and `onBlur`
    const [field, meta] = useField({ ...props, type: 'checkbox' });
    return (
        <>
            <div className={`form-group d-flex flex-wrap gap-2 align-items-center ${className && className}`}>
                <input className="form-check-input" type="checkbox" id={field.name} {...field} {...props} />
                <label className="form-check-label" htmlFor={field.name}>
                    {children}
                </label>
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-danger">{meta.error}</div>
            ) : null}
        </>
    );
};

export default CheckboxField


