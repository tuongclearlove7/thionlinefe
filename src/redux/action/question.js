
import {createSlice} from "@reduxjs/toolkit"

const question_action = createSlice({
        name: "question_creates",
        initialState : {
            question_creates: {
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



        }
    }
);

export const {

    getQuestionCreateStart,
    getQuestionCreateSuccess,
    getQuestionCreateFailed,


} = question_action.actions;

export default question_action.reducer;