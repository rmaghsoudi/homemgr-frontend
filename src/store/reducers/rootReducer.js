import occupantReducer from './occupantReducer';
import choreReducer from './choreReducer';
import loginReducer from './loginReducer';
import groceryReducer from './groceryReducer';


import {combineReducers} from 'redux';

const rootReducer=combineReducers({
    login:loginReducer,
    occupant:occupantReducer,
    chore:choreReducer,
    grocery:groceryReducer
});

export default rootReducer