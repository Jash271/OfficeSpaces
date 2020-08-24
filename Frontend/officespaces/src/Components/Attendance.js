
import React from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class Attendance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myEvents: [{'start':"2020-07-23",
                        "end":"2020-07-23",
                        "text":"P"},
                        {'start':"2020-07-29",
                        "end":"2020-07-30",
                        "text":"P"},
                        {'start':"2020-08-29",
                        "end":"2020-08-30",
                        "text":"P"}]
        };
        
 
    }
    onEventSelect = (event, inst) => {
        mobiscroll.toast({
            message: event.event.text
        });
    }
    render() {
        return (
            <mobiscroll.Eventcalendar
                theme="mobiscroll" 
                themeVariant="dark"
                display="inline"
                calendarHeight={614}
                view={{
                    calendar: {
                        labels: true
                    }
                }}
                onEventSelect={this.onEventSelect}
                data={this.state.myEvents}
            />
        );
    }    
}

export default Attendance;