import {ADD_PIZZA} from '../constants/cart';


export const addPizza = (obj) => ({
    type: ADD_PIZZA,
    payload: obj
})