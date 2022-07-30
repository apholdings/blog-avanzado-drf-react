import { combineReducers } from 'redux';
import blog from './blog';
import categories from './categories';

export default combineReducers({
    blog,
    categories
})