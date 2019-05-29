import { combineReducers } from "redux";
import authReducer from "./authReducer.js";

const reducer = combineReducers({
    auth: authReducer
});

export default reducer;
