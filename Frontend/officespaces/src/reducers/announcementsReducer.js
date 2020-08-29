import { GET_ANNOUNCEMENTS, ANNOUNCEMENT_ERROR, FILTER_ANNOUNCEMENTS, CLEAR_ANN } from '../actions/types';

const initialState = {
    totalAnn: [],
    error: null,
    filtered: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ANNOUNCEMENTS:
            return {
                ...state,
                totalAnn: action.payload
            }
        case ANNOUNCEMENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case FILTER_ANNOUNCEMENTS:
            return {
                ...state,
                filtered: state.totalAnn.filter(announcement => {
                    const regex = new RegExp(`${action.payload}`, 'gi');
                    return announcement.Title.match(regex);
                })
            }
        case CLEAR_ANN:
            return {
                ...state,
                filtered: null
            }
        default:
            return { ...state }
    }
}