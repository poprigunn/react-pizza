import {SET_PIZZAS} from '../constants/pizzas';
import axios from 'axios';

export const setPizzas = (items) => ({
    type: SET_PIZZAS,
    payload: items
    })

export const fetchPizzas = (category, sortType) => (dispatch) => {
    axios.get(`http://localhost:3001/pizzas?${category === null ? '' : `category=${category}`}&_sort=${sortType}&_order=asc`)
        .then(({data}) => dispatch(setPizzas(data)))
}