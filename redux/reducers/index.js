import changeTheNumber from "./updown";

import  { combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeTheNumber : changeTheNumber
})

export default rootReducer;