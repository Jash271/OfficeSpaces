import React from 'react'
import { connect } from 'react-redux'
import { setCurrent } from '../actions/employeeActions'

const EmployeeItem = ({ employee, setCurrent }) => {

    const { first_name, last_name, photo, id } = employee
    console.log(first_name, last_name, photo, id)

    const setTheEmployee = () => {
        setCurrent(employee)
    }

    return (
        <div className="column" float="left" width="50%">
            <div className="col s6 m4">
                <div className="card">
                    <div className="center">
                        <img className="round-img" width="200" height='200' src={photo} />
                    </div>
                    <div class="card-content">
                        <span>
                            <h4>
                                <span>{first_name} {last_name}</span>&nbsp;&nbsp;
                                <a class="btn-floating waves-effect waves-light purple" onClick={setTheEmployee}><i class="material-icons">keyboard_arrow_right</i></a>
                            </h4>
                        </span>
                    </div>
                </div>
            </div >
        </div >

    )
}


export default connect(null, { setCurrent })(EmployeeItem)
