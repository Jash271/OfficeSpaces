import React, { useEffect, useState, useRef } from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { getAnnouncements } from "../actions/announcementActions";
import {
  filterAnnouncement,
  clearFilterAnnouncement,
} from "../actions/announcementActions";

const Announcements = ({
  totalAnn,
  getAnnouncements,
  filterAnnouncement,
  clearFilterAnnouncement,
  filtered,
}) => {
  const [announcements, setAnnouncements] = useState([]);
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterAnnouncement(e.target.value);
    } else {
      clearFilterAnnouncement();
    }
  };

  const onClickClose = () => {
    text.current.value = "";
    clearFilterAnnouncement();
  };

  useEffect(() => {
    const token = `Token ${localStorage.getItem("Token")}`;
    var myHeaders = new Headers();
    myHeaders.append("Authorization", token);
    myHeaders.append("Content-type", "application/json");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    fetch("http://localhost:8000/operations/AllAnnouncements", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        // this.setState({
        //     "Announcements": data
        // })
        // console.log(this.state)
        setAnnouncements(data);
        getAnnouncements(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div>
      <div className="center">
        <h1>
          <span className="grey-text">Our</span>
          {" "}
          <span className="purple-text">Announcements</span>
          {" "}
        </h1>
      </div>
      <div className="container s12 m10">
        <nav
          className="purple darken-2"
          style={{
            marginBottom: "30px",
          }}
        >
          <div class="nav-wrapper">
            <form>
              <div class="input-field">
                <input
                  id="search"
                  type="search"
                  placeholder="Search Employee.."
                  ref={text}
                  onChange={onChange}
                  required
                />
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons" onClick={onClickClose}>
                  close
                </i>
              </div>
            </form>
          </div>
        </nav>
      </div>
      <div className="row">
        {totalAnn &&
          (filtered ? <Card data={filtered} /> : <Card data={totalAnn} />)}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalAnn: state.announcement.totalAnn,
  filtered: state.announcement.filtered,
});

export default connect(mapStateToProps, {
  getAnnouncements,
  filterAnnouncement,
  clearFilterAnnouncement,
})(Announcements);
