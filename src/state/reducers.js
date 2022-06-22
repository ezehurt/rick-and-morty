import { connectRouter } from "connected-react-router";
import customHistory from "../common/history";
import appReducer from "./app";


const keys = {
    app: appReducer,
    router:connectRouter(customHistory),

};

export default keys;
