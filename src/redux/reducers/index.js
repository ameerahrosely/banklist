import { itemReducer, selectedItemReducer } from './itemReducer';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    allItems: itemReducer,
    items: selectedItemReducer
});

export default allReducers;