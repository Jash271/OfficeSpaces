import React from "react";
import Grid from "@material-ui/core/Grid";
import PersonIcon from "@material-ui/icons/Person";
import ApartmentIcon from "@material-ui/icons/Apartment";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Attendance from "./Attendance";
import { connect } from "react-redux";

const employeeDetail = ({ current }) => {
  return (
    <div style={{ margin: "30px" }}>
      <div className="center">
        <h1>
          <span className="grey-text">Employee </span>
          <span className="purple-text">
            Details
          </span>
        </h1>
      </div>
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
                      src={current.photo}
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
                      <span style={{ color: "purple" }}>
                        {current.first_name} {current.last_name}
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
                        <ApartmentIcon /> Address:
                      </span>
                      <span style={{ color: "purple" }}>
                        {current.address}
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
                      <span style={{ color: "purple" }}>
                        {current.username}
                      </span>
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

const mapStateToProps = (state) => ({
  current: state.employee.current,
});

export default connect(mapStateToProps, null)(employeeDetail);
