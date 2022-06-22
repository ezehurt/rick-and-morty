import { configureStore } from "@reduxjs/toolkit";
import customHistory from "../common/history";
import rootReducer from "./reducers";
import { routerMiddleware } from "connected-react-router";

const router = routerMiddleware(customHistory);

const store = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false
            }).concat(router),
    });
    
    // expose store when run in Cypress
    if (window.Cypress) {
        window.myStore = store;
        console.log("[Cypress Running]: Store saved:", store)
    }

    return store;
};

export default store;
