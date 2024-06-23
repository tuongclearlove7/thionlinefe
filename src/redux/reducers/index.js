import { combineReducers } from "redux";
import auth_reducer from "../action/auth";

const rootReducers = combineReducers({
    auth : auth_reducer,
});

export default rootReducers;