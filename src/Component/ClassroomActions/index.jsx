import React from "react";
// import AddEntry from "./addEntry/AddEntry";
// import {Button} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import ThermostatAutoOutlinedIcon from "@mui/icons-material/ThermostatAutoOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";
import SetMealOutlinedIcon from "@mui/icons-material/SetMealOutlined";
import BedtimeOutlinedIcon from "@mui/icons-material/BedtimeOutlined";
import ShowerOutlinedIcon from "@mui/icons-material/ShowerOutlined";
import SentimentDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentDissatisfiedOutlined";
import BlenderOutlinedIcon from "@mui/icons-material/BlenderOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import WcOutlinedIcon from "@mui/icons-material/WcOutlined";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import AddEntery from "../ClassRoster/AddEntery/AddEntery";
import {NavLink, Outlet} from "react-router-dom";
//import img from "../ClassRoster/assests/girl.png";
import {useDispatch, useSelector} from "react-redux";
// import {Form, Formik} from "formik";
// import SelectField from "../Common/SelectField";
// import {toast} from "react-toastify";
// import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allActions from "../../actions";

function NavOptions({ selectedChild, notifyAction }) {
    return (
        <>
            <div className="card bg-transparent border-0 mb-20">
                <div className="card-body d-flex flex-wrap justify-content-between align-items-center gap-3 p-0">
                    {/*<NavLink to="checkin" className="Link White">*/}
                        <AddEntery
                            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                            imgtitle="check in"
                        />
                    {/*</NavLink>*/}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="activity" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<AccessTimeOutlinedIcon className="icon" />}
                            imgtitle="Activity"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<AccessTimeOutlinedIcon className="icon" />}
                        imgtitle="Activity"
                    />}
                    {selectedChild && selectedChild !== 0 ? <NavLink to="health" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<LocalHospitalOutlinedIcon className="icon" />}
                            imgtitle="Health"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<LocalHospitalOutlinedIcon className="icon" />}
                        imgtitle="Health"
                    /> }
                    {selectedChild && selectedChild !== 0 ? <NavLink to="temperature" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<ThermostatAutoOutlinedIcon className="icon" />}
                            imgtitle="Temperature"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<ThermostatAutoOutlinedIcon className="icon" />}
                        imgtitle="Temperature"
                    />}
                    {selectedChild && selectedChild !== 0 ? <NavLink to="fluids" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<WidgetsOutlinedIcon className="icon" />}
                            imgtitle="Fluids"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<WidgetsOutlinedIcon className="icon" />}
                        imgtitle="Fluids"
                    />}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="food" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<SetMealOutlinedIcon className="icon" />}
                            imgtitle="Food"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<SetMealOutlinedIcon className="icon" />}
                        imgtitle="Food"
                    />}
                    {selectedChild && selectedChild !== 0 ? <NavLink to="sleep" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<BedtimeOutlinedIcon className="icon" />}
                            imgtitle="Sleep"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<BedtimeOutlinedIcon className="icon" />}
                        imgtitle="Sleep"
                    />}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="toilet" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<ShowerOutlinedIcon className="icon" />}
                            imgtitle="Toilet"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<ShowerOutlinedIcon className="icon" />}
                        imgtitle="Toilet"
                    />}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="mood" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<SentimentDissatisfiedOutlinedIcon className="icon" />}
                            imgtitle="Mood"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<SentimentDissatisfiedOutlinedIcon className="icon" />}
                        imgtitle="Mood"
                    />}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="supplies" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<BlenderOutlinedIcon className="icon" />}
                            imgtitle="Supplies"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<BlenderOutlinedIcon className="icon" />}
                        imgtitle="Supplies"
                    />}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="notes" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<DescriptionOutlinedIcon className="icon" />}
                            imgtitle="Notes"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<DescriptionOutlinedIcon className="icon" />}
                        imgtitle="Notes"
                    />}
    
                    {selectedChild && selectedChild !== 0 ? <NavLink to="nameToFace" className="Link White">
                    <AddEntery
                        onClick={notifyAction}
                        imgsrc={<WcOutlinedIcon className="icon" />}
                        imgtitle="Name to Face"
                    /></NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<WcOutlinedIcon className="icon" />}
                        imgtitle="Name to Face"
                    />}
                    <AddEntery
                        imgsrc={<SensorDoorOutlinedIcon className="icon" />}
                        imgtitle="Move rooms"
                    />
                    {selectedChild && selectedChild !== 0 ? <NavLink to="checkout" className="Link White">
                        <AddEntery
                            onClick={notifyAction}
                            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                            imgtitle="Check out"
                        />
                    </NavLink> : <AddEntery
                        onClick={notifyAction}
                        imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                        imgtitle="Check out"
                    />}
                </div>
            </div>
        </>
    );
}

function ApplyToSection({ childList, childID }) {
    const dispatch = useDispatch();
    const handleChange = (event) => {
        dispatch(allActions.putChildID(event.target.value));
    }
    return (
        <>
            <div className="card mb-20">
                <div className="card-header bg-transparent d-flex flex-wrap justify-content-between align-items-center gap-3 p-3">
                    <h2 className="fs-5">Select Child</h2>
                </div>
                <div className="card-body">
                    <select name="classroom" id="classroom" className="form-control" onChange={handleChange} value={childID}>
                        <option value={0}>Select a child</option>
                        {childList && childList.length > 0 && childList.map((o) => {
                            return (
                                <option key={o.id} value={o.id}>{o.fullname}</option>
                            )
                        })}
                    </select>
                </div>
            </div>
        </>
    );
}

const ClassroomActionsComponent = () => {
    const childList = useSelector(state => {
        if (state.childs) {
            return state.childs.list;
        }
        return undefined
    });
    const childID = useSelector(state => state.childs.childID);
    const notifyAction = () => {
        if (childID === undefined || childID === 0) {
            toast.error('Please select child from the list below!', {
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
    }
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12 mb-20">
                    <NavOptions selectedChild={childID} notifyAction={notifyAction} />
                    <ApplyToSection childList={childList} childID={childID} />
                    <ToastContainer />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default ClassroomActionsComponent;
