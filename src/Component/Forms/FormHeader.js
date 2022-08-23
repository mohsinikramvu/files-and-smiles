import React from "react"
import "./FormHeader.css"

const FormHeader = ({ title, className }) => {
    return (
        <>
            <div className="form-heading">
                <h2 className={className ? className : ''}>{title}</h2>
            </div>
        </>
    )
}

export default FormHeader