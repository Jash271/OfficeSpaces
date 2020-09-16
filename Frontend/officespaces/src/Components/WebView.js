import React, { useEffect, useState } from "react";
import axios from "axios";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

const WebView = (props) => {
  const [attendance, setAttendance] = useState([]);

  const apiFetch = async () => {
    const employeeName = props.match.params.employeeName;
    const response = await axios.get(
      `https://jash10.pythonanywhere.com/operations/get_user_attendance/${employeeName}`
    );
    const dummy = response.data;
    const dummy2 = [];
    for (let element of dummy.attendance_list) {
      dummy2.push({
        text: "P",
        start: element,
        color: "lightgreen",
      });
    }
    setAttendance(dummy2);
  };

  useEffect(() => {
    apiFetch();
  }, []);

  const onEventSelect = (event, inst) => {
    mobiscroll.toast({
      message: event.event.text,
    });
  };
  return (
    <mobiscroll.Eventcalendar
      theme="mobiscroll"
      themeVariant="dark"
      display="inline"
      calendarHeight={614}
      view={{
        calendar: {
          labels: true,
        },
      }}
      onEventSelect={onEventSelect}
      data={attendance}
    />
  );
};

export default WebView;
