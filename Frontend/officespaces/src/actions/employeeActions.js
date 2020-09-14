import { EMPLOYEES_ERROR, GET_EMPLOYEES, FILTER_EMPLOYEES, CLEAR_FILTER, SET_CURRENT } from './types'
import axios from 'axios';

export const getEmployees = () => async dispatch => {
    try {
        const token = localStorage.getItem('Token')
        const res = await axios.get('http://127.0.0.1:8000/operations/Employees', {
            headers: {
                'Authorization': `Token ${token}`
            }
        });

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

export const setCurrent = (currentEmployee) => {
    return ({
        type: SET_CURRENT,
        payload: currentEmployee
    })
}