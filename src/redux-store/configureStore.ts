import { createStore } from "redux"
import { reducers } from "./combineReducer";

const initialState = {};

export default () => {
    const store = createStore(
        reducers(),
        initialState,
    );
    return store
}