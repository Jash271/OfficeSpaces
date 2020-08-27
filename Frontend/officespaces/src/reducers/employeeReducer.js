import { EMPLOYEES_ERROR, GET_EMPLOYEES, FILTER_EMPLOYEES, CLEAR_FILTER, SET_CURRENT } from '../actions/types';
import heth from '../photos/heth.jpeg'
import jash from '../photos/jash.jpeg'
import jenish from '../photos/jenish.jpeg'
import mihir from '../photos/mihir.jpeg'

const initialState = {
    employees: [
        {
            id: 1,
            first_name: "Heth",
            last_name: "Gala",
            photo: heth
        },
        {
            id: 2,
            first_name: "Jash",
            last_name: "Shah",
            photo: jash
        },
        {
            id: 3,
            first_name: "Jenish",
            last_name: "Hirpara",
            photo: jenish
        },
        {
            id: 4,
            first_name: 'Mihir',
            last_name: 'Shah',
            photo: mihir
        }
    ],
    error: null,
    filtered: null,
    current: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_EMPLOYEES:
            return {
                ...state,
                employees: action.payload
            }
        case EMPLOYEES_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FILTER_EMPLOYEES:
            return {
                ...state,
                filtered: state.employees.filter(employee => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return employee.first_name.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        case SET_CURRENT:
            return {
                ...state,
                current: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}