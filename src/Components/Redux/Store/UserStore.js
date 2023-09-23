import { createStore } from "redux";
import UserReducer from "../Reducer/UserReducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export const UserStore = createStore(UserReducer, composeWithDevTools())