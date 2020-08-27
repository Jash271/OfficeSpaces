import { EMPLOYEES_ERROR, GET_EMPLOYEES, FILTER_EMPLOYEES, CLEAR_FILTER } from '../actions/types';
import heth from '../photos/heth.jpeg'
import jash from '../photos/jash.jpeg'
import jenish from '../photos/jenish.jpeg'
import mihir from '../photos/mihir.jpeg'

const initialState = {
    employees: [
        {
            id: 1,
            name: "Heth Gala",
            position: "Computer Engineer",
            image: heth
        },
        {
            id: 2,
            name: "Jash Shah",
            position: "Django Master",
            image: jash
        },
        {
            id: 3,
            name: "Jenish Hirpara",
            position: "Flutter Master",
            image: jenish
        },
        {
            id: 4,
            name: 'Mihir Shah',
            position: 'Android Master',
            image: mihir
        }
    ],
    error: null,
    filtered: null
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
                    return employee.name.match(regex);
                })
            }
        case CLEAR_FILTER:
            return {
                ...state,
                filtered: null
            }
        default:
            return {
                ...state,
            }
    }
}