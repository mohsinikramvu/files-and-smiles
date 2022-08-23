import React, {useState} from 'react'
import './contact.css'

import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import CloseIcon from '@mui/icons-material/Close';
import FormHeader from "../../../Component/Forms/FormHeader";
import InputField from "../../../Component/Common/InputField";
import RadioField from "../../../Component/Common/RadioField";
import SelectField from "../../../Component/Common/SelectField";

const parentAndGuardianData = {
    fullName: '',
    email: '',
    retypeEmail: '',
    mobilePhone: '',
    otherPhones: '',
    relationShip: '',
}

const emergencyContactsData = {
    detail: '',
    type: '',
}

const Contact = () => {
    const [parentsAndGuardians, setParentsAndGuardians] = useState([]);
    const [emergencyContacts, setEmergencyContacts] = useState([]);
    // Parents and Guardians
    const addParentAndGuardianForm = () => {
        setParentsAndGuardians([
            ...parentsAndGuardians,
            parentAndGuardianData
        ])
    }
    const removeParentGuardian = (item) => {
        let currentData = [...parentsAndGuardians];
        let indexFound = currentData.findIndex((o, index) => index === item);
        currentData.splice(indexFound, 1);
        setParentsAndGuardians(currentData);
    }
    // Emergency Contacts
    const addEmergencyContacts = () => {
        setEmergencyContacts([
            ...emergencyContacts,
            emergencyContactsData
        ])
    }
    const removeEmergencyContact = (item) => {
        let currentData = [...emergencyContacts];
        let indexFound = currentData.findIndex((o, index) => index === item);
        currentData.splice(indexFound, 1);
        setEmergencyContacts(currentData);
    }
    return (
        <React.Fragment>
            <Container maxWidth='x-lg'>
                <FormHeader title="Contacts" />
                <div className='contact-form-head p-3'>
                    <div className='contact-text'>
                        <h5>PARENTS AND GUARDIANS</h5>
                    </div>
                    {parentsAndGuardians.length > 0 && parentsAndGuardians.map((item, index) => {
                        return (
                            <div className="form-body position-relative" key={index}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputField
                                            label="Full Name"
                                            name="fullName"
                                            type="text"
                                            placeholder="Jane Doe"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <InputField
                                            label="Email"
                                            name="email"
                                            type="email"
                                            placeholder="jane@gmail.com"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <InputField
                                            label="Retype-Email"
                                            name="retypeEmail"
                                            type="email"
                                            placeholder="jane@gmail.com"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <InputField
                                            label="Mobile Phone"
                                            name="mobilePhone"
                                            type="text"
                                            placeholder="1231232312"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <InputField
                                            label="Other Phones"
                                            name="otherPhones"
                                            type="text"
                                            placeholder="1231232312"
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="radio-group d-flex align-items-center gap-3 flex-wrap mb-3 h-100">
                                            <label className="form-label" htmlFor="timing">Relationship</label>
                                            <RadioField
                                                type="radio"
                                                data={[
                                                    {label: "Parent", value: "parent"},
                                                    {label: "Guardian", value: "guardian"},
                                                ]}
                                                name="relationship"
                                                className="custom-radio"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div onClick={() => removeParentGuardian(index)} className="bg-danger cursor-pointer close-parent-guardian" style={{width: "max-content"}}>
                                    <CloseIcon className="text-white" />
                                </div>
                            </div>
                        )
                    })}
                    <div className='contact-form-btn'>
                        <Button style={{color: 'white'}} onClick={addParentAndGuardianForm}>Add Parents / Guardians</Button>
                    </div>
                </div>
                <hr/>
                <div className='contact-form-head p-3'>
                    <div className='contact-text'>
                        <h5>EMERGENCY CONTACTS</h5>
                    </div>
                    {emergencyContacts.length > 0 && emergencyContacts.map((item, index) => {
                        return (
                            <div className="form-body position-relative" key={index}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <InputField
                                            label=""
                                            name="detail"
                                            type="text"
                                            placeholder="Enter name, phone & details here..."
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <SelectField
                                            label=""
                                            data={[
                                                {label: 'Grandparent', value: 'grandparent'},
                                                {label: 'Parent', value: 'parent'},
                                                {label: 'Aunt/Uncle', value: 'aunt/uncle'},
                                                {label: 'Friend', value: 'friend'},
                                                {label: 'Doctor', value: 'doctor'},
                                                {label: 'Other', value: 'other'},
                                            ]}
                                            className="w-100"
                                            name="type"
                                        />
                                    </div>
                                </div>
                                <div onClick={() => removeEmergencyContact(index)} className="bg-danger cursor-pointer close-parent-guardian" style={{width: "max-content"}}>
                                    <CloseIcon className="text-white" />
                                </div>
                            </div>
                        )
                    })}
                    <div className='contact-form-btn'>
                        <Button style={{color: 'white'}} onClick={addEmergencyContacts}>Add Emergency Contact</Button>
                    </div>
                </div>
                <FormHeader title="Address" />
                <div className="contact-form p-3">
                    <div className="row">
                        <div className="col-md-6">
                            <InputField
                                label="Address"
                                name="address"
                                type="text"
                                placeholder="Street and number"
                            />
                            <InputField
                                label="Address line 2 (optional)"
                                name="addressLine2"
                                type="text"
                                placeholder="Apt, Suite, etc"
                            />
                            <InputField
                                label="City"
                                name="city"
                                type="text"
                                placeholder="New york"
                            />
                            <InputField
                                label="State or province"
                                name="stateOrProvince"
                                type="text"
                                placeholder="New york"
                            />
                            <InputField
                                label="Country"
                                name="country"
                                type="text"
                                placeholder="USA"
                            />
                            <InputField
                                label="ZIP or Postal Code"
                                name="country"
                                type="text"
                            />
                        </div>
                        <div className="col-md-12">
                            <div className='contact-form-end-btns'>
                                <div className='contact-form-btn-end'>
                                    <span>Records </span>
                                    <button type='button'>Add Parents / Guardians</button>
                                </div>
                                <div className='contact-form-btn-last'>
                                    <span>Additional Notes</span>
                                    <button type='button'>Add Profile Notes</button>
                                </div>
                            </div>
                            <div className='btn-end1'>
                                <Button variant='contained'>Add</Button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<form className='form-address'>*/}
                {/*    <label>Address</label> <br/>*/}
                {/*    <input type='text' placeholder='street and number'/> <br/>*/}
                {/*    <label>Address line 2 (optional)</label> <br/>*/}
                {/*    <input type='text' placeholder='Adt,sulte,etc'/> <br/>*/}
                {/*    <label>City</label> <br/>*/}
                {/*    <input type='text' placeholder='New york'/> <br/>*/}
                {/*    <label>State and province</label> <br/>*/}
                {/*    <input type='text' placeholder='New york'/> <br/>*/}
                {/*    <label>Country</label> <br/>*/}
                {/*    <input type='text' placeholder='USA'/> <br/>*/}
                {/*    <label>Zip or Postal Code</label> <br/>*/}
                {/*    <input type='text'/> <br/>*/}
                {/*</form>*/}
            </Container>
        </React.Fragment>
    )
}

export default Contact
