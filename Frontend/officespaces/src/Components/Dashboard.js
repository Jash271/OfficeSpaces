import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux';
import { getEmployees, filterContacts, clearFilter } from '../actions/employeeActions'
import EmployeeItem from './EmployeeItem'

const Home = ({ employees, getEmployees, filtered, filterContacts, clearFilter }) => {
    const text = useRef('');

    useEffect(() => {
        getEmployees();
    }, [])

    const onChange = (e) => {
        if (text.current.value !== "") {
            filterContacts(e.target.value)
        }
        else {
            clearFilter()
        }
    }

    const onClickClose = () => {
        text.current.value = ''
        clearFilter()

    }

    return (
        <div>
            <div className="container center" >
                <h1><span class="grey-text">All</span> <span className="purple-text">Employees</span></h1>
            </div>
            <div className="container s12 m10">

                <nav className="purple darken-2" style={{
                    marginBottom: '30px'
                }}>
                    <div class="nav-wrapper">
                        <form>
                            <div class="input-field">
                                <input id="search" type="search" placeholder="Search Employee.." ref={text} onChange={onChange} required />
                                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                                <i class="material-icons" onClick={onClickClose}>close</i>
                            </div>
                        </form>
                    </div>
                </nav>

            </div>

            {
                filtered === null ? (
                    <div className="container s10 m5">
                        <div className="row">
                            {employees && employees.map(employee =>
                                <EmployeeItem employee={employee} key={employee.id} />)}
                        </div>
                    </div>) : (
                        <div className="container s10 m5">
                            <div className="row">
                                {filtered.map(employee =>
                                    <EmployeeItem employee={employee} key={employee.id} />)}
                            </div>
                        </div>
                    )
            }
        </div >
    )
}

const mapStateToProps = (state) => ({
    employees: state.employee.employees,
    filtered: state.employee.filtered
})

export default connect(mapStateToProps, { getEmployees, filterContacts, clearFilter })(Home)
