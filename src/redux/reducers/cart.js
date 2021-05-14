import {ADD_PIZZA} from '../constants/cart';

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA:
            let newItem = {}
            if (state.items[action.payload.id]) {
                let item = state.items[action.payload.id]
                    .filter(obj => obj.size === action.payload.size && obj.type === action.payload.type)
                let oldItems = state.items[action.payload.id]
                    .filter(obj => obj.size !== action.payload.size || obj.type !== action.payload.type)
                if (item.length !== 0) {
                    item[0].count += 1
                    newItem = {
                        ...state.items,
                        [action.payload.id]: [...oldItems, ...item]
                    }
                } else {
                    action.payload.count = 1
                    newItem = {
                        ...state.items,
                        [action.payload.id]: [...state.items[action.payload.id], action.payload]
                    }
                }
            } else {
                action.payload.count = 1
                newItem = {
                    ...state.items,
                    [action.payload.id]:
                        !state.items[action.payload.id]
                            ? [action.payload]
                            : [...state.items[action.payload.id], action.payload]
                }
            }

             const allPizzas = [].concat.apply([], Object.values(newItem))
             const totalCount = allPizzas.reduce((sum, obj) => obj.count + sum, 0)
             const totalPrice = allPizzas.reduce((sum, obj) => (obj.count * obj.price) + sum, 0)

            return {
                ...state,
                items: newItem,
                totalCount: totalCount,
                totalPrice: totalPrice
            }
        default:
            return state
    }
}

export default cart