import { combineReducers } from 'redux'
import employeeReducer from './employeeReducer';
import userReducer from './userReducer'
import announcementsReducer from './announcementsReducer'

export default combineReducers({
    employee: employeeReducer,
    user: userReducer,
    announcement: announcementsReducer
})