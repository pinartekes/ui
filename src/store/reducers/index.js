import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form';
import securityReducer from "./securityReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    form: formReducer,
    userReducer,
    security: securityReducer

   
})

export default rootReducer;