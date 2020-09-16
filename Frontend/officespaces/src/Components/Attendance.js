import React from "react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

class Attendance extends React.Component {
  constructor(props) {
    super(props);
  }
  onEventSelect = (event, inst) => {
    mobiscroll.toast({
      message: event.event.text,
    });
  };
  render() {
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
        onEventSelect={this.onEventSelect}
        data={this.props.attendance}
      />
    );
  }
}

export default Attendance;
