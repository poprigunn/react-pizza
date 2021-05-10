import {SET_CATEGORY, SET_SORT_TYPE} from '../constants/filters';

const initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc'
    }
}

const filters = (state = initialState, action) => {
    switch (action.type){
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        case SET_SORT_TYPE:
            return{
                ...state,
                sortBy: {
                    type: action.payload
                }
            }
        default:
            return state
    }
}

export default filters