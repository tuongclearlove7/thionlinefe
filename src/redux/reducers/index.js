import { combineReducers } from "redux";
import auth_reducer from "../action/auth";
import category_question_reducer from "../action/category_question";
import question_reducer from "../action/question";
import exam_reducer from "../action/exam";
import result_reducer from "../action/result";

const rootReducers = combineReducers({
    auth : auth_reducer,
    category_question : category_question_reducer,
    question : question_reducer,
    exam : exam_reducer,
    result : result_reducer
});

export default rootReducers;