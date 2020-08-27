import { USER_ERROR, LOGIN_USER, LOGOUT } from '../actions/types';

const initialState = {
    user: null,
    error: null,
    isAuthenticated: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                user: action.payload.doctor,
                isAuthenticated: true,
                current: action.payload.doctor
            }
        case USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
        default:
            return { ...state }
    }
}