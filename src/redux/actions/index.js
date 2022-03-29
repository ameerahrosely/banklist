export const setItems = (items) => {
    return {
        type: 'SET_ITEMS',
        payload: items
    };
}

export const selectedItems = (item) => {
    return {
        type: 'SELECTED_ITEM',
        payload: item
    };
}

export const removeSelectedItems = () => {
    return {
        type: 'REMOVE_SELECTED_ITEM',
    };
}

