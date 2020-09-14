import React, { useState } from 'react';
import { connect } from 'react-redux'
import { getViolations } from '../actions/userActions'
import { Line } from 'react-chartjs-2';

const Violations = ({ getViolations, violations }) => {

    const state = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
                label: 'No of violations / day',
                backgroundColor: 'rgba(41, 241, 195, 0.5)',
                borderColor: 'rgba(0,0,0,0.2)',
                borderWidth: 2,
                data: violations ? violations.Social_Distancing_Violation : [12]
            }
        ]
    }
    const state1 = {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [
            {
                label: 'No of violations / day',
                backgroundColor: 'rgba(154, 18, 179, 0.5)',
                borderColor: 'rgba(0,0,0,0.2)',
                borderWidth: 2,
                data: violations ? violations.Mask_Violation : [12]
            }
        ]
    }

    const [date, setDate] = useState({
        month: '',
        year: ''
    })

    const { month, year } = date

    const onChange = e => setDate({ ...date, [e.target.name]: e.target.value })

    const onSubmit = e => {
        console.log(month, year)
        getViolations(month, year)
        e.preventDefault();
    }

    return (
        <div className="container" style={{ marginBottom: '100px' }}>
            <h1><span></span><span className="grey-text">Monthly</span> <span className="purple-text">Violations</span></h1>
            <h5 className="grey-text">Enter the following details to visualize the monthly violations</h5>
            <div className="form">
                <div className="row">
                    <div className="col s12">
                        Enter the year:
                        <div className="input-field inline">
                            <i class="material-icons prefix purple-text small">calender_today</i>

                            <input id="year" type="text" name="year" value={year} className="validate" onChange={onChange} />
                            <label for="year">Year</label>
                            <span className="helper-text" data-error="wrong" data-success="right">YYYY</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12">
                        Enter the month:
                        <div className="input-field inline">
                            <input id="month" type="text" name='month' value={month} className="validate" onChange={onChange} />
                            <label for="month">Month</label>
                            <span className="helper-text" data-error="wrong" data-success="right">MM</span>
                        </div>
                    </div>
                </div>
                <div className="btn btn-large waves-effect waves-light purple darken-2" onClick={onSubmit}>Create my chart</div>
            </div>
            <br />
            <br />
            <div>
                {violations && (
                    <div>
                        <h3><span></span><span className="grey-text">Monthly</span> <span className="purple-text">Violations</span></h3>
                        <br />
                        <br />
                        <h5><span></span><span className="grey-text">Social Distancing</span> <span className="purple-text">Violations---></span></h5>
                        <h6>Total no of Social Distancing violations over this month-<span className='purple-text'><b>{violations.Social_Distancing_Violation_Month}</b></span></h6>
                        <br />
                        <br />
                        <Line
                            data={state}
                            options={{
                                title: {
                                    display: true,
                                    text: `Social Distancing violations over the month-${month}`,
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                        <br />
                        <br />
                        <h5><span></span><span className="grey-text">Mask </span><span className="purple-text">Violations---></span></h5>
                        <h6>Total no of Mask violations over this month-<span className='purple-text'><b>{violations.Mask_Violation_Month}</b></span></h6>

                        <br />
                        <br />
                        <Line
                            data={state1}
                            options={{
                                title: {
                                    display: true,
                                    text: `Mask violations over the month-${month}`,
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>

                )
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    violations: state.user.violations
})

export default connect(mapStateToProps, { getViolations })(Violations);
