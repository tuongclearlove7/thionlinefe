
import {createSlice} from "@reduxjs/toolkit"

const exam_action = createSlice({
        name: "exam_creates",
        initialState : {
            exam_creates: {
                data: null,
                isFetching: false,
                error: false
            },

            exams: {
                data: null,
                isFetching: false,
                error: false
            },

        },

        reducers: {

            getExamCreateStart: (state) => {
                state.exam_creates.isFetching = true;
            },
            getExamCreateSuccess: (state, action) => {
                state.exam_creates.isFetching = false;
                state.exam_creates.data = action.payload;
                state.exam_creates.error = false;
            },
            getExamCreateFailed: (state) => {
                state.exam_creates.isFetching = false;
                state.exam_creates.error = true;
            },


            getExamStart: (state) => {
                state.exams.isFetching = true;
            },
            getExamSuccess: (state, action) => {
                state.exams.isFetching = false;
                state.exams.data = action.payload;
                state.exams.error = false;
            },
            getExamFailed: (state) => {
                state.exams.isFetching = false;
                state.exams.error = true;
            },



        }
    }
);

export const {

    getExamCreateStart,
    getExamCreateSuccess,
    getExamCreateFailed,

    getExamStart,
    getExamSuccess,
    getExamFailed

} = exam_action.actions;

export default exam_action.reducer;