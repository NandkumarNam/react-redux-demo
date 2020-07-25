import {combineReducers} from 'redux';
import bookReducer from './bookReducer';
import penReducer from './penReducer';

export default combineReducers({
    book: bookReducer,
    pen: penReducer
});