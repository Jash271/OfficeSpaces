import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import PersonIcon from "@material-ui/icons/Person";
import ApartmentIcon from "@material-ui/icons/Apartment";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Attendance from "./Attendance";
import { connect } from "react-redux";

const EmployeeDetail = ({ current }) => {
  const [attendance, setAttendance] = useState([]);

  const apiFetch = async () => {
    const employeeName = current.user_ref.username;
    const response = await axios.get(
      `http://127.0.0.1:8000/operations/get_user_attendance/${employeeName}`
    );
    const dummy = response.data;
    const dummy2 = [];
    for (let element in dummy) {
      dummy2.push({ text: "P" });
    }
    setAttendance(dummy2);
  };

  useEffect(() => {
    apiFetch();
  }, []);

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
                      <span style={{ color: "purple" }}>{current.address}</span>
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
                        {current.user_ref.username}
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
        <Attendance attendance={attendance} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.employee.current,
});

export default connect(mapStateToProps, null)(EmployeeDetail);
