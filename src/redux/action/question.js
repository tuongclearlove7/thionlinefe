
import {createSlice} from "@reduxjs/toolkit"

const question_action = createSlice({
        name: "question_creates",
        initialState : {
            question_creates: {
                data: null,
                isFetching: false,
                error: false
            },
            questions: {
                data: null,
                isFetching: false,
                error: false
            },
        },

        reducers: {

            getQuestionCreateStart: (state) => {
                state.question_creates.isFetching = true;
            },
            getQuestionCreateSuccess: (state, action) => {
                state.question_creates.isFetching = false;
                state.question_creates.data = action.payload;
                state.question_creates.error = false;
            },
            getQuestionCreateFailed: (state) => {
                state.question_creates.isFetching = false;
                state.question_creates.error = true;
            },



            getQuestionStart: (state) => {
                state.questions.isFetching = true;
            },
            getQuestionSuccess: (state, action) => {
                state.questions.isFetching = false;
                state.questions.data = action.payload;
                state.questions.error = false;
            },
            getQuestionFailed: (state) => {
                state.questions.isFetching = false;
                state.questions.error = true;
            },



        }
    }
);

export const {

    getQuestionCreateStart,
    getQuestionCreateSuccess,
    getQuestionCreateFailed,

    getQuestionStart,
    getQuestionSuccess,
    getQuestionFailed


} = question_action.actions;

export default question_action.reducer;