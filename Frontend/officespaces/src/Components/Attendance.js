
import React from 'react';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class Attendance extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            myEvents: []
        };
        
        mobiscroll.util.getJson('https://trial.mobiscroll.com/events/', (events) => {
            console.log(events)
            this.setState({ myEvents: events });
        }, 'jsonp');
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