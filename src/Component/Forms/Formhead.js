import React from 'react';
import './form.css';
import Container from '@mui/material/Container'
// import Button from '@mui/material/Button';
// import AttachFileIcon from '@mui/icons-material/AttachFile';
import InputField from "../Common/InputField";
import SelectField from "../Common/SelectField";
import CheckboxField from "../Common/CheckboxField";
import RadioField from "../Common/RadioField";
import FileField from "../Common/FileField";
// import {useSelector} from "react-redux";

const Formhead = () => {
    return (
        <React.Fragment>
            <Container maxWidth='x-lg'>
                <div className="basic-form p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <InputField
                                label="First Name"
                                name="firstName"
                                type="text"
                                placeholder="Jane"
                            />
                            <InputField
                                label="Last Name"
                                name="lastName"
                                type="text"
                                placeholder="Jane"
                            />
                            <label className="form-label" htmlFor="dob">Date of Birth</label>
                            <div className="row">
                                <div className="col-md-4">
                                    <SelectField
                                        label=""
                                        data={[
                                            {label: '11', value: 11}
                                        ]}
                                        className="w-100"
                                        name="day"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <SelectField
                                        label=""
                                        data={[
                                            {label: 'Apr', value: 'apr'}
                                        ]}
                                        className="w-100"
                                        name="month"
                                    />
                                </div>
                                <div className="col-md-4">
                                    <SelectField
                                        label=""
                                        data={[
                                            {label: '2022', value: 2022}
                                        ]}
                                        className="w-100"
                                        name="year"
                                    />
                                </div>
                            </div>
                            <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3">
                                <label className="form-label" htmlFor="gender">Gender</label>
                                <RadioField
                                    type="radio"
                                    data={[
                                        {label: "Boy", value: "boy"},
                                        {label: "Girl", value: "girl"},
                                        {label: "X", value: "x"},
                                    ]}
                                    name="gender"
                                    className="custom-radio"
                                />
                            </div>
                            <FileField
                                className="file-input"
                                label="Attach File"
                                type="file"
                                name="attachment"
                            />
                            <CheckboxField
                                type="checkbox"
                                name="permitPhotos"
                                children="Permitted in photos and videos with other children"
                                className="checkbox-outline mb-3" />
                        </div>
                        {/*<div className="col-md-6">*/}
                        {/*    <label className="form-label">Last Name</label>*/}
                        {/*    <input type='text' placeholder='xxxxxxxxxxx' className='form-control' />*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6">*/}
                        {/*    <label className="form-label">Date of Birth</label>*/}
                        {/*    <select name="DOB" className="form-control">*/}
                        {/*        <option value="31">31</option>*/}
                        {/*        <option value="11">11</option>*/}
                        {/*        <option value="7">7</option>*/}
                        {/*        <option value="3">3</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6">*/}
                        {/*    <label className="form-label">DOB</label>*/}
                        {/*    <select name="DOB" className="form-control">*/}
                        {/*        <option value="April">April</option>*/}
                        {/*        <option value="May">May</option>*/}
                        {/*        <option value="June">June</option>*/}
                        {/*        <option value="August">August</option>*/}
                        {/*    </select>*/}
                        {/*</div>*/}
                        {/*<div className="col-md-6">*/}
                        {/*    <label className="form-label">Gender</label>*/}
                        {/*    <input type="radio" name="gender" value="boy" className="form-control" checked/> Boy*/}
                        {/*    <input type="radio" name="gender" value="girl" className="form-control" /> Girl*/}
                        {/*    <input type="radio" name="gender" value="x" className="form-control" /> X*/}
                        {/*</div>*/}
                        {/*<div className="col-md-12">*/}
                        {/*    <div className='file-btn'>*/}
                        {/*        <Button type='file' variant="contained" style={{backgroundColor: 'lightgray'}} endIcon={<AttachFileIcon/>}>*/}
                        {/*            Attach file*/}
                        {/*        </Button> <span>&nbsp;&nbsp;&nbsp; No file choosen</span>*/}
                        {/*    </div>*/}
                        {/*    <input type="checkbox" value="photos and videos"/>*/}
                        {/*    <sapn style={{fontWeight: 'bold'}}>Permitted with photos and videos with other children</sapn>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default Formhead
