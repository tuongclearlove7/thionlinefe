
import {createSlice} from "@reduxjs/toolkit"

const result_action = createSlice({
        name: "result_creates",
        initialState : {
            result_creates: {
                data: null,
                isFetching: false,
                error: false
            },

            results: {
                data: null,
                isFetching: false,
                error: false
            },
        },

        reducers: {

            getResultCreateStart: (state) => {
                state.result_creates.isFetching = true;
            },
            getResultCreateSuccess: (state, action) => {
                state.result_creates.isFetching = false;
                state.result_creates.data = action.payload;
                state.result_creates.error = false;
            },
            getResultCreateFailed: (state) => {
                state.result_creates.isFetching = false;
                state.result_creates.error = true;
            },


            getResultStart: (state) => {
                state.results.isFetching = true;
            },
            getResultSuccess: (state, action) => {
                state.results.isFetching = false;
                state.results.data = action.payload;
                state.results.error = false;
            },
            getResultFailed: (state) => {
                state.results.isFetching = false;
                state.results.error = true;
            },



        }
    }
);

export const {

    getResultCreateStart,
    getResultCreateSuccess,
    getResultCreateFailed,


    getResultStart,
    getResultSuccess,
    getResultFailed

} = result_action.actions;

export default result_action.reducer;