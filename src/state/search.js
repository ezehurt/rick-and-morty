import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: "",
}

const appSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onChangeTerm: (state, {payload:term}) => {
            state.term = term
        },
    }
})

export const {
    onChangeTerm
} = appSlice.actions



export default appSlice.reducer;

export const termSelector = (state) => state.search.term;