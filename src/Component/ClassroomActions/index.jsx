import React from "react";
//import AddEntry from "./addEntry/AddEntry";
import {Button} from "@mui/material";
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
import {useSelector} from "react-redux";

function NavOptions() {
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

                    <NavLink to="activity" className="Link White">
                        <AddEntery
                            imgsrc={<AccessTimeOutlinedIcon className="icon" />}
                            imgtitle="Activity"
                        />
                    </NavLink>
                    <NavLink to="health" className="Link White">
                        <AddEntery
                            imgsrc={<LocalHospitalOutlinedIcon className="icon" />}
                            imgtitle="Health"
                        />
                    </NavLink>
                    <NavLink to="temperature" className="Link White">
                        <AddEntery
                            imgsrc={<ThermostatAutoOutlinedIcon className="icon" />}
                            imgtitle="Temperature"
                        />
                    </NavLink>
                    <NavLink to="fluids" className="Link White">
                        <AddEntery
                            imgsrc={<WidgetsOutlinedIcon className="icon" />}
                            imgtitle="Fluids"
                        />
                    </NavLink>

                    <NavLink to="food" className="Link White">
                        <AddEntery
                            imgsrc={<SetMealOutlinedIcon className="icon" />}
                            imgtitle="Food"
                        />
                    </NavLink>
                    <NavLink to="sleep" className="Link White">
                        <AddEntery
                            imgsrc={<BedtimeOutlinedIcon className="icon" />}
                            imgtitle="Sleep"
                        />
                    </NavLink>

                    <NavLink to="toilet" className="Link White">
                        <AddEntery
                            imgsrc={<ShowerOutlinedIcon className="icon" />}
                            imgtitle="Toilet"
                        />
                    </NavLink>

                    <NavLink to="mood" className="Link White">
                        <AddEntery
                            imgsrc={<SentimentDissatisfiedOutlinedIcon className="icon" />}
                            imgtitle="Mood"
                        />
                    </NavLink>

                    <NavLink to="supplies" className="Link White">
                        <AddEntery
                            imgsrc={<BlenderOutlinedIcon className="icon" />}
                            imgtitle="Supplies"
                        />
                    </NavLink>

                    <NavLink to="notes" className="Link White">
                        <AddEntery
                            imgsrc={<DescriptionOutlinedIcon className="icon" />}
                            imgtitle="Notes"
                        />
                    </NavLink>

                    <AddEntery
                        imgsrc={<WcOutlinedIcon className="icon" />}
                        imgtitle="Name to Face"
                    />
                    <AddEntery
                        imgsrc={<SensorDoorOutlinedIcon className="icon" />}
                        imgtitle="Move rooms"
                    />
                    <NavLink to="checkout" className="Link White">
                        <AddEntery
                            imgsrc={<ArrowCircleRightOutlinedIcon className="icon" />}
                            imgtitle="Check out"
                        />
                    </NavLink>
                </div>
            </div>
        </>
    );
}

function ApplyToSection({ childList }) {
    console.log(childList, "Child List");
    return (
        <>
            <div className="card mb-20">
                <div className="card-header bg-transparent d-flex flex-wrap justify-content-between align-items-center gap-3 p-3">
                    <h2 className="fs-5">Apply To</h2>
                    <Button className="btn btn-success select-all-btn" type="submit">Select All</Button>
                </div>
                <div className="card-body">
                    <div className="">
                        <select name="child" id="child" className="form-control">
                            {childList.map((o) => {
                                return (
                                    <>
                                        <option key={o.id} value={o.id}>
                                            {o.fullname}
                                        </option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                </div>
            </div>
        </>
    );
}

const ClassroomActionsComponent = () => {
    const childList = useSelector(state => state.childs.list);
    return (
        <>
            <div className="row m-auto w-100">
                <div className="col-md-12 mb-20">
                    <NavOptions />
                    <ApplyToSection childList={childList} />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default ClassroomActionsComponent;
