import React from "react";
import { Button } from "@mui/material";

// import girls from "../ClassRoster/assests/girl.png";
import "./style.css";

const TemperatureComponent = () => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <div className="time-main">
        <h3 style={{ marginLeft: "50px" }}>Temperature</h3> <br />
        <input
          style={{ marginLeft: "50px" }}
          type="text"
          className="inputs"
        />{" "}
        <br />
        <div className="notes">
          <h2>Notes</h2>
          <input type="text" />
        </div>
        <div className="create">
          <Button>Create Entry</Button>
        </div>
      </div>
    </div>
  );
};

export default TemperatureComponent;
