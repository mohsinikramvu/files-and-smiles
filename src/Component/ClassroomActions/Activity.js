import React from "react";
import { Button } from "@mui/material";

import girls from "../ClassRoster/assests/girl.png";
import "./card.css";

const ActivityComponent = () => {
  return (
    <div>
      <div className="time-main">
        <div className="notes">
          <h2>Description</h2>
          <input type="text" />
        </div>
        <div className="create">
          <Button>Create Entry</Button>
        </div>
      </div>
    </div>
  );
};

export default ActivityComponent;
