import {SET_CATEGORY, SET_SORT_TYPE} from '../constants/filters';

export const setCategory = (index) => ({
    type: SET_CATEGORY,
    payload: index
})

export const setSortBY = (type) => ({
    type: SET_SORT_TYPE,
    payload: type
})
