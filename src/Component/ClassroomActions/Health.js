import React from "react";
import { Button } from "@mui/material";

import girls from "../ClassRoster/assests/girl.png";
import "./card.css";

const HealthComponent = () => {
  return (
    <div>
      <div className="time-main" style={{ backgroundColor: "white" }}>
        <br />
        <form className="form">
          <label>Health</label> <br />
          <div className="form-radio">
            <input type="radio" name="health" value="fine" /> Fine
            <input type="radio" name="health" value="sick" /> Sick
            <input type="radio" name="health" value="injured" /> Injured
          </div>
          <div className="AddOn-checkbox-text">
            <label>Observations</label> <br />
            <div className="health-checkbox">
              <div>
                <b>
                  <small>Observations</small>
                </b>
              </div>
              <div>
                <input type="checkbox" />
                <p>N : Runny Nose</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>G : Cough</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>D : Diarrhea</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>F : Fever</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>M : Vomiting</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>B : Breating</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>Abnormally</p>
              </div>
            </div>
            <div className="health-checkbox health-checkbox-two">
              <div>
                <input type="checkbox" />
                <p>S : Skin Rush</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>C : Cuts</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>U : Bruises</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>V : Behavior</p>
              </div>
              <div>
                <input type="checkbox" />
                <p>O : Other</p>
              </div>
            </div>
          </div>
          <label>Notes</label> <br />
          <textarea width="100%" cols={47} rows={5} /> <br />
          <div className="create">
            <Button type="submit" variant="contained">
              Create Entry
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HealthComponent;
