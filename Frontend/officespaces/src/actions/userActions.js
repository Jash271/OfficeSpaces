import { REGISTER_USER, USER_ERROR, LOGIN_USER, LOGOUT } from './types'
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
