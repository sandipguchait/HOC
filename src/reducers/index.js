import { combineReducers } from 'redux';
import commentReducer from './commentreducer';

export default combineReducers ({
    comments: commentReducer
});