const initialState = {
    items: [],
};

export const itemReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'SET_ITEMS':
            return {...state, items: payload};
        default:
            return state;
    }
}

export const selectedItemReducer = (state = {}, {type, payload}) => {
    switch (type) {
        case 'SELECTED_ITEM':
            return {...state, ...payload};
        case 'REMOVE_SELECTED_ITEM':
            return {};    
        default:
            return state;
    }
}