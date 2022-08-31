import React from "react"
import "./login.css"
import {validateLastName} from "../../utils/validations/validateStaffForm";
import {removeEmptyValues} from "../../utils/removeEmptyValues";
import {toast} from "react-toastify";
import InputField from "../../Component/Common/InputField";
import {Formik} from "formik";
import logo from "../../assets/img/logo.PNG";
import {performLogin} from "../../services/users";
import {useDispatch} from "react-redux";
import allActions from "../../actions";
import {useNavigate} from "react-router";

const Login = ({ className }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <div className={`login-form d-flex align-items-center ${className}`}>
                            <Formik
                                initialValues={{ email: "", password: "" }}
                                validate={values => {
                                    const {email, password} = values;
                                    let result = {
                                        email: validateLastName(email),
                                        password: validateLastName(password),
                                    };
                                    result = removeEmptyValues(result);
                                    return result;
                                }}
                                onSubmit={(values, {setSubmitting}) => {
                                    console.log(values);
                                    performLogin(values).then((response) => {
                                        if (response.token) {
                                            dispatch(allActions.putUserLoggedInDetail(response));
                                            toast.success('Congratulations! you have logged in successfully', {
                                                position: "top-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                            });
                                            navigate("/");
                                        } else {
                                            toast.error(response.message, {
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
                                    })
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
                                    <form onSubmit={handleSubmit} className="border bg-secondary p-5 rounded">
                                        <div className="top-logo d-flex justify-content-center align-items-center">
                                            <img src={logo} className="img-fluid img-thumbnail w-25 mb-3" alt="logo" />
                                        </div>
                                        <InputField
                                            type="email"
                                            name="email"
                                            placeholder="Enter email"
                                            label="Email"
                                            className="w-100"
                                        />
                                        <InputField
                                            type="password"
                                            name="password"
                                            placeholder="Enter password"
                                            label="Password"
                                            className="w-100"
                                        />
                                        <button type="submit" className="btn btn-success select-all-btn">
                                            Login
                                        </button>
                                    </form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;