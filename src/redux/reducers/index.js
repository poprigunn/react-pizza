import cart from './cart.js'
import filters from './filters'
import pizzas from './pizzas'
import {combineReducers} from 'redux';

const reducers = combineReducers({
    cart,
    filters,
    pizzas
})

export default reducers