import { GET_ANNOUNCEMENTS, ANNOUNCEMENT_ERROR, FILTER_ANNOUNCEMENTS, CLEAR_ANN } from './types'

import axios from 'axios';

export const getAnnouncements = (data) => async dispatch => {
    try {
        dispatch({
            type: GET_ANNOUNCEMENTS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: ANNOUNCEMENT_ERROR,
            payload: error
        })
    }
}

export const filterAnnouncement = text => {
    return ({
        type: FILTER_ANNOUNCEMENTS,
        payload: text
    })
}

export const clearFilterAnnouncement = () => {
    return ({
        type: CLEAR_ANN
    })
}
