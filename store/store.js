import { createStore, combineReducers } from 'redux';
import hotel from './../reducers/hotel';
import payment from './../reducers/payment';
import search from './../reducers/search';
import details from './../reducers/details';

const reducers = combineReducers({ search, hotel, details, payment });
export const store = createStore(reducers);
