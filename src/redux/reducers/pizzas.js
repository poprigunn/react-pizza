import {SET_PIZZAS} from '../constants/pizzas';

const initialState = {
    items: null,
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    switch (action.type){
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        default:
            return state
    }
}

export default pizzas