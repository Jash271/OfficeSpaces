import React from "react";

import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import ApartmentIcon from "@material-ui/icons/Apartment";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Attendance from "./Attendance";

const employeeDetail = (props) => {
  return (
    <div style={{ margin: "30px" }}>
      <div className="row">
        <div className="card-medium">
          <div className="">
            <div className="card-panel">
              <div className="card-content purple-text">
                <Grid container spacing={5}>
                  <Grid item xs={12} sm={5} md={3}>
                    <img
                      style={{
                        width: "250px",
                        height: "250px",
                        borderRadius: "125px",
                        marginBottom: "10px",
                      }}
                      src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sm={7}
                    md={9}
                    style={{ marginTop: "30px" }}
                  >
                    <h5 className="card-title">
                      <span
                        style={{
                          color: "purple",
                          fontWeight: "bold",
                          marginRight: "20px",
                        }}
                      >
                        <PersonIcon /> Employee-Name:
                      </span>
                      <span style={{ color: "purple" }}>Jenish Hirpara</span>
                    </h5>
                    <h5 className="card-title">
                      <span
                        style={{
                          color: "purple",
                          fontWeight: "bold",
                          marginRight: "20px",
                        }}
                      >
                        <ApartmentIcon /> Address:
                      </span>
                      <span style={{ color: "purple" }}>
                        100, Chandan Apartments, Nala Sopara, Washington DC,
                        South Africa
                      </span>
                    </h5>
                    <h5 className="card-title">
                      <span
                        style={{
                          color: "purple",
                          fontWeight: "bold",
                          marginRight: "20px",
                        }}
                      >
                        <AccountCircleIcon /> Username:
                      </span>
                      <span style={{ color: "purple" }}>60004180000</span>
                    </h5>
                    <h5 className="card-title">
                      <span
                        style={{
                          color: "purple",
                          fontWeight: "bold",
                          marginRight: "20px",
                        }}
                      >
                        <WorkIcon /> Employee-Type:
                      </span>
                      <span style={{ color: "purple" }}>Full-Time</span>
                    </h5>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <Attendance />
      </div>
    </div>
  );
};

export default employeeDetail;
