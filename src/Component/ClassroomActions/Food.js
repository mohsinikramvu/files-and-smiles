import React from "react";
import "./style.css";
import { Button } from "@mui/material";
function Food() {
  return (
    <div className="container-fluid">
      <div className="floz">
        <h3>Meal</h3>
        <select>
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
        </select>
      </div>

      <h3>Quantity</h3>
      <div className="fluid-items-container">
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>All</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Most</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>Some</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>None</p>
        </div>
        <div className="fluid-item">
          <input type="radio" name="fluid" />
          <p>N/A</p>
        </div>
      </div>

      <div className="note-container">
        <h3>Food</h3>
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

export default Food;
