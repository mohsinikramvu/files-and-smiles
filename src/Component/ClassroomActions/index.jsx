import React from "react";
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
import {useDispatch, useSelector} from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import allActions from "../../actions";
import {signInChild, signOutChild} from "../../services/childrens";

function NavOptions({ selectedChild, notifyAction, dispatch, childCheckInStatus }) {
    const classID = useSelector(state => state.classrooms.classroomID);
    const checkInChild = () => {
        if (selectedChild === undefined || selectedChild === 0) {
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
        } else {
            const result = {kid: selectedChild, teacher: 1};
            signInChild(result).then((response) => {
                if (response.success) {
                    toast.success('Child check in successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    const result = {
                        status: true,
                        selectedChild
                    }
                    dispatch(allActions.putCheckInStatus(result))
                    return undefined;
                }
            });
        }
    }
    const checkOutChild = () => {
        if (selectedChild === undefined || selectedChild === 0) {
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
        } else {
            const result = {kid: selectedChild, teacher: 1, room: classID};
            signOutChild(result).then((response) => {
                if (response.success) {
                    toast.success('Child check out successfully!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                    const result = {
                        status: false,
                        selectedChild
                    }
                    dispatch(allActions.putCheckInStatus(result))
                    // navigate("/classroom-actions");
                    return undefined;
                }
            });
        }
    }
    return (
        <>
            <div className="card bg-transparent border-0 mb-20">
                <div className="card-body d-flex flex-wrap justify-content-between align-items-center gap-3 p-0">
                    {/*<NavLink to="checkin" className="Link White">*/}
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="" className="Link White">
                        <AddEntery
                            onClick={checkInChild}
                            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                            imgtitle="check in"
                        />
                    </NavLink> : <AddEntery
                        onClick={checkInChild}
                        imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                        imgtitle="check in"
                    />}
                    {/*</NavLink>*/}
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="activity" className="Link White">
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
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="health" className="Link White">
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
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="temperature" className="Link White">
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
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="fluids" className="Link White">
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
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="food" className="Link White">
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
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="sleep" className="Link White">
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
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="toilet" className="Link White">
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
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="mood" className="Link White">
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
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="supplies" className="Link White">
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
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="notes" className="Link White">
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
    
                    {selectedChild && childCheckInStatus && selectedChild !== 0 ? <NavLink to="nameToFace" className="Link White">
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
                    {selectedChild && !childCheckInStatus && selectedChild !== 0 ? <NavLink to="" className="Link White">
                        <AddEntery
                            onClick={checkOutChild}
                            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                            imgtitle="Check out"
                        />
                    </NavLink> : <AddEntery
                        onClick={checkOutChild}
                        imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                        imgtitle="Check out"
                    />}
                </div>
            </div>
        </>
    );
}

function ApplyToSection({ childList, childID, dispatch }) {
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
    const dispatch = useDispatch();
    const childList = useSelector(state => {
        if (state.childs) {
            return state.childs.list;
        }
        return undefined
    });
    const childCheckInStatus = useSelector(state => state.childs.checkInStatus);
    const childID = useSelector(state => state.childs.childID);
    const notifyAction = () => {
        if (!childCheckInStatus && (childID === undefined || parseInt(childID) === 0)) {
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
        } else if (!childCheckInStatus) {
            toast.error('Please check in child first!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12 mb-20">
                    <NavOptions selectedChild={childID} notifyAction={notifyAction} dispatch={dispatch} childCheckInStatus={childCheckInStatus} />
                    <ApplyToSection childList={childList} childID={childID} dispatch={dispatch} />
                    <ToastContainer />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default ClassroomActionsComponent;
