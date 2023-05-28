import { combineReducers } from "redux";
import TextShowerReducer from "./TextShowerReducer";

const reducers =  combineReducers({
    text : TextShowerReducer
});

export default reducers ;