import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import PersonIcon from "@material-ui/icons/Person";
import ApartmentIcon from "@material-ui/icons/Apartment";
import WorkIcon from "@material-ui/icons/Work";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Attendance from "./Attendance";
import { connect } from "react-redux";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';



const EmployeeDetail = ({ current }) => {
  const [attendance, setAttendance] = useState([]);
  const [percentage, setPercentage] = useState();

  const apiFetch = async () => {
    const employeeName = current.user_ref.username;
    const response = await axios.get(
      `http://jash10.pythonanywhere.com/get_user_attendance/${employeeName}`
    );
    const dummy = response.data;
    const dummy2 = [];
    for (let element in dummy) {
      dummy2.push({ text: "P" });
    }
    setAttendance(dummy2);
    setPercentage(dummy.Attendance_percentage.toFixed(2))
    console.log(dummy)
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
                    <div className="row">
                      <div className="col s12 m6 l9">
                        <h5 className="card-title">
                          <span
                            style={{
                              color: "purple",
                              fontWeight: "bold",
                              marginRight: "20px",
                            }}
                          >
                            <PersonIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="grey-text">
                              Employee Name:
                            </span>
                          </span>
                          <span className="purple-text">
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
                            <ApartmentIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="grey-text">
                              Address:
                            </span>
                          </span>
                          <span className="purple-text">{current.address}</span>
                        </h5>
                        <h5 className="card-title">
                          <span
                            style={{
                              color: "purple",
                              fontWeight: "bold",
                              marginRight: "20px",
                            }}
                          >
                            <AccountCircleIcon /> &nbsp;&nbsp;&nbsp;&nbsp;
                            <span className="grey-text">
                              Username:
                            </span>
                          </span>
                          <span className="pruple-text">
                            {current.user_ref.username}
                          </span>
                        </h5>
                      </div>
                      <div className="col s12 m6 l3">
                        <b><h5><span className="grey-text">{current.first_name}'s</span> <span className="purple-text"> Attendance</span></h5></b>
                        <br />
                        <div style={{ width: 150, height: 150 }}>
                          <CircularProgressbar
                            value={`${percentage}`}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              trailColor: '#ccc',
                              pathColor: 'rgb(92, 0, 153,1)',
                              textColor: 'rgb(92, 0, 153,1)',
                              textSize: 25
                            })} />
                        </div>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginLeft: "10px" }}>
        <div className="center">
          <h3>
            <span className="grey-text">Attendance </span>
            <span className="purple-text">
              Calender
          </span>
          </h3>
        </div>
        <br />
        <Attendance attendance={attendance} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current: state.employee.current,
});

export default connect(mapStateToProps, null)(EmployeeDetail);
