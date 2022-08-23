import React from "react";
import CircleRoundedIcon from '@mui/icons-material/CircleRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import "./card.css";
import {Formik} from "formik";

const CheckinComponent = () => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>Check In</h2>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-4 mb-20">
                        <div
                            className="form-group p-3 bg-danger d-flex flex-wrap gap-2 flex-column justify-content-between h-100">
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault1"/>
                                <label className="form-check-label text-white" htmlFor="flexRadioDefault1">
                                    Checked In
                                </label>
                            </div>
                            <div class="form-check">
                                <input className="form-check-input" type="radio" name="flexRadioDefault"
                                       id="flexRadioDefault2" checked/>
                                <label className="form-check-label text-white" htmlFor="flexRadioDefault2">
                                    Event
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-20">
                        <div
                            className="form-group p-3 bg-primary d-flex flex-wrap gap-2 flex-column justify-content-between h-100">
                            <h3 className="text-white text-center">5</h3>
                            <p className="text-white text-center m-0">Children</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-20">
                        <div
                            className="form-group p-3 bg-danger d-flex flex-wrap gap-2 flex-column justify-content-between h-100">
                            <h3 className="text-white text-center">03</h3>
                            <p className="text-white text-center m-0">Allergic</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="tab-link p-3 mb-20 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div className="title-heading d-flex gap-3 align-items-center">
                                <CircleRoundedIcon color="error"/>
                                <div className="head d-flex flex-column flex-wrap gap-2 align-items-start">
                                    <span className="fs-5 fw-bold">Add Epi Pen</span>
                                    <span>3 Epi pens</span>
                                </div>
                            </div>
                            <div className="icon">
                                <ChevronRightRoundedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="tab-link p-3 mb-20 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div className="title-heading d-flex gap-3 align-items-center">
                                <CircleRoundedIcon color="primary"/>
                                <div className="head d-flex flex-column flex-wrap gap-2 align-items-start">
                                    <span className="fs-5 fw-bold">Take Attendance</span>
                                    <span>10 March 2022</span>
                                </div>
                            </div>
                            <div className="icon">
                                <ChevronRightRoundedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="tab-link p-3 mb-20 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div className="title-heading d-flex gap-3 align-items-center">
                                <CircleRoundedIcon color="warning"/>
                                <div className="head d-flex flex-column flex-wrap gap-2 align-items-start">
                                    <span className="fs-5 fw-bold">2 Checked in Teachers</span>
                                    <span>Ratio 1 : 6</span>
                                </div>
                            </div>
                            <div className="icon">
                                <ChevronRightRoundedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="tab-link p-3 mb-20 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div className="title-heading d-flex gap-3 align-items-center">
                                <CircleRoundedIcon color="error"/>
                                <div className="head d-flex flex-column flex-wrap gap-2 align-items-start">
                                    <span className="fs-5 fw-bold">Classroom Safety Audit Checklist</span>
                                    <span>Ratio 1 : 6</span>
                                </div>
                            </div>
                            <div className="icon">
                                <ChevronRightRoundedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="tab-link p-3 mb-20 d-flex align-items-center justify-content-between gap-2 flex-wrap">
                            <div className="title-heading d-flex gap-3 align-items-center">
                                <CircleRoundedIcon color="success"/>
                                <div className="head d-flex flex-column flex-wrap gap-2 align-items-start">
                                    <span className="fs-5 fw-bold">Children with food restrictions.</span>
                                    <span>5</span>
                                </div>
                            </div>
                            <div className="icon">
                                <ChevronRightRoundedIcon/>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <Formik
                            initialValues={{time: '', notes: ''}}
                            validate={values => {
                                console.log(values);
                            }}
                            onSubmit={(values, {setSubmitting}) => {
                                console.log(values);
                                // setTimeout(() => {
                                //     alert(JSON.stringify(values, null, 2));
                                //     setSubmitting(false);
                                // }, 400);
                            }}
                        >
                            {({
                                  values,
                                  errors,
                                  touched,
                                  handleChange,
                                  handleBlur,
                                  handleSubmit,
                                  isSubmitting,
                                  /* and other goodies */
                                }) => (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-group mb-20">
                                        <label className="form-label" htmlFor="time">Time</label>
                                        <input
                                            type="time"
                                            name="time"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.time}
                                        />
                                        {errors.time && touched.time && errors.time}
                                    </div>
                                    <div className="form-group mb-20">
                                        <label className="form-label" htmlFor="notes">Notes</label>
                                        <textarea
                                            name="notes"
                                            id="notes"
                                            cols="30"
                                            rows="10"
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.notes}></textarea>
                                        {errors.notes && touched.notes && errors.notes}
                                    </div>
                                    <button type="submit" className="btn btn-success select-all-btn">
                                        Submit
                                    </button>
                                </form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckinComponent;
