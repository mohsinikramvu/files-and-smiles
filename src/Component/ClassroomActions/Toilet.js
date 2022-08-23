import React from "react";
import "./style.css";
import { Button } from "@mui/material";

function Toilet() {
  return (
    <div>
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
        <h3>Type</h3>
        <div className="fluid-items-container">
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Diaper</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Potty</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Sat on potty</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Underwear</p>
          </div>
        </div>

        <h3>Toilet</h3>
        <div className="fluid-items-container">
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Dry</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Wet</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Powed Movement</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Peed</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Applied cream</p>
          </div>
          <div className="fluid-item">
            <input type="radio" name="fluid" />
            <p>Had an accident</p>
          </div>
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
    </div>
  );
}

export default Toilet;
