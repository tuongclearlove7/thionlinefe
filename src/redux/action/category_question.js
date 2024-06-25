
import {createSlice} from "@reduxjs/toolkit"

const category_question_action = createSlice({
        name: "category_question_creates",
        initialState : {
            category_question_creates: {
                data: null,
                isFetching: false,
                error: false
            },

            category_questions: {
                data: null,
                isFetching: false,
                error: false
            },
        },

        reducers: {

            getCategoryQuestionCreateStart: (state) => {
                state.category_question_creates.isFetching = true;
            },
            getCategoryQuestionCreateSuccess: (state, action) => {
                state.category_question_creates.isFetching = false;
                state.category_question_creates.data = action.payload;
                state.category_question_creates.error = false;
            },
            getCategoryQuestionCreateFailed: (state) => {
                state.category_question_creates.isFetching = false;
                state.category_question_creates.error = true;
            },


            getCategoryQuestionStart: (state) => {
                state.category_questions.isFetching = true;
            },
            getCategoryQuestionSuccess: (state, action) => {
                state.category_questions.isFetching = false;
                state.category_questions.data = action.payload;
                state.category_questions.error = false;
            },
            getCategoryQuestionFailed: (state) => {
                state.category_questions.isFetching = false;
                state.category_questions.error = true;
            },



        }
    }
);

export const {

    getCategoryQuestionCreateStart,
    getCategoryQuestionCreateSuccess,
    getCategoryQuestionCreateFailed,

    getCategoryQuestionStart,
    getCategoryQuestionSuccess,
    getCategoryQuestionFailed


} = category_question_action.actions;

export default category_question_action.reducer;