import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    term: "",
    paginationInfo: null
}

const appSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        onChangeTerm: (state, {payload:term}) => {
            state.term = term
        },
        setPaginationInfo: (state, {payload}) => {
            state.paginationInfo = payload
        },
    }
})

export const {
    onChangeTerm,
    setPaginationInfo
} = appSlice.actions



export default appSlice.reducer;

export const termSelector = (state) => state.search.term;
export const paginationInfoSelector = (state) => state.search.paginationInfo;
