import { combineReducers } from 'redux';
import commentReducer from './commentreducer';
import Auth from './auth';

export default combineReducers ({
    comments: commentReducer,
    auth: Auth
});