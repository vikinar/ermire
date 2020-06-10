import {applyMiddleware, compose, createStore} from "redux"
import thunk from 'redux-thunk'
import {rootReducer} from "./rootReducer";

export const makeStore = (initialState) => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    return store;
};
