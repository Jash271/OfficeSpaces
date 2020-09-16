import { USER_ERROR, LOGIN_USER, LOGOUT, GET_VIOLATIONS, DUMMY, REMOVE_DUMMY } from '../actions/types';

const initialState = {
    user: null,
    error: null,
    isAuthenticated: false,
    violations: null,
    dummy: true
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true,
            }
        case USER_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case LOGOUT:
            localStorage.clear()
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                dummy: true
            }
        case GET_VIOLATIONS:
            return {
                ...state,
                violations: action.payload
            }
        case DUMMY:
            return {
                ...state,
                dummy: false
            }
        default:
            return { ...state }
    }
}