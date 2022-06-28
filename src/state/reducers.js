import { connectRouter } from "connected-react-router";
import customHistory from "../common/history";
import appReducer from "./app";
import searchReducer from "./search";



const keys = {
    app: appReducer,
    router:connectRouter(customHistory),
    search: searchReducer,

};

export default keys;
