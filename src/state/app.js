import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: null
}

const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload;
        }
    }
})

export const {
    setIsLoading
} = appSlice.actions



export default appSlice.reducer;

export const isLoadingSelector = (state) => state.user.user?.username;