import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/userReducer";

export const store = createStore(rootReducer, applyMiddleware(thunk));