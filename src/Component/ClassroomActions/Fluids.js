import React from "react";
import "./style.css";
import { Button } from "@mui/material";

function Fluids() {
  return (
    <div className="container-fluid">
      <h3>Time</h3>
      <div className="time">
        <select>
          <option>6 AM</option>
          <option>7 AM</option>
          <option>8 AM</option>
          <option>9 AM</option>
          <option>10 AM</option>
        </select>
        <p>:</p>
        <select>
          <option>10</option>
          <option>20</option>
          <option>30</option>
          <option>40</option>
          <option>50</option>
          <option>59</option>
        </select>
      </div>
      <div className="minimize-time">
        <span>-5</span>
        <span>-10</span>
        <span>-15</span>
        <span>-30</span>
        <span>Now</span>
      </div>
      <h3>Fluid</h3>
      <div className="fluid-items-container">
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Milk</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Formula</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Breast Milk</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Water</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Other</p>
        </div>
      </div>
      <div className="floz">
        <h3>Floz</h3>
        <select>
          <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
        </select>
      </div>
      <div className="note-container">
        <h3>Notes</h3>
        <textarea></textarea>
      </div>
      <Button
        variant="contained"
        className="btn-end"
        style={{ marginTop: "15px" }}
      >
        Create Entry
      </Button>
    </div>
  );
}

export default Fluids;
