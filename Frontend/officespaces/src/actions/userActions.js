import { REGISTER_USER, USER_ERROR, LOGIN_USER, LOGOUT, GET_VIOLATIONS } from './types'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const loginUser = (user) => async dispatch => {
    try {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const res = await axios.post('https://health-care-auto.herokuapp.com/api/doctor/login', user, config)

        console.log(res)
        dispatch({
            type: LOGIN_USER,
            payload: res.data
        })
        setAuthToken(res.data.token)
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

export const getViolations = (month, year) => async dispatch => {
    console.log(month, year);

    try {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token 23d59ee86227db5d94974ee692fe5b29c050c81c'
            }
        }
        const data = {
            month, year
        }
        const res = await axios.post('http://127.0.0.1:8000/operations/violation-tracker', data, config);
        console.log(res.data);
        dispatch({
            type: GET_VIOLATIONS,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.statusText
        })
    }
}

