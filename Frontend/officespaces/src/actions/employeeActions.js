import { EMPLOYEES_ERROR, GET_EMPLOYEES, FILTER_EMPLOYEES, CLEAR_FILTER } from './types'
import axios from 'axios';

export const getEmployees = () => async dispatch => {
    try {
        const res = await axios.get('/operations/Employees');

        dispatch({
            type: GET_EMPLOYEES,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: EMPLOYEES_ERROR,
            payload: error
        })
    }
}

export const filterContacts = text => {
    return ({
        type: FILTER_EMPLOYEES,
        payload: text
    })
}

export const clearFilter = () => {
    return ({
        type: CLEAR_FILTER
    })
}