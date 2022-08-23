import React from "react"
import {useField, Field} from "formik"

const RadioField = ({label, data, className, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <>
            {label && (<label className="form-label" id="my-radio-group">{label}</label>)}
            <div role="group" aria-labelledby="my-radio-group" className={className && className}>
                {data.map(o => {
                    return (
                        <label key={o.label} className="form-label">
                            <Field name={field.name}>
                                {({ field }) => (
                                    <input
                                        type="radio"
                                        {...field}
                                        value={o.value}
                                        {...props}
                                    />
                                )}
                            </Field>
                            {o.label}
                        </label>
                    )
                })}
            </div>
            {meta.touched && meta.error ? (
                <div className="error text-danger">{meta.error}</div>
            ) : null}
        </>
    )
}

export default RadioField