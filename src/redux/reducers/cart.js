const ADD_PIZZA = 'ADD_PIZZA'


const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type){
        case ADD_PIZZA:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        default:
            return state
    }
}

export default cart