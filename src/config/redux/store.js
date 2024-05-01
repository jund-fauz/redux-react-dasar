import {createStore, applyMiddleware} from "redux"
import storage from "redux-persist/lib/storage";
import {persistStore, persistReducer} from "redux-persist"
import {logger} from "redux-logger"
import reducer from "./reducer.js";

const persistedReducer = persistReducer({key: 'root', storage}, reducer)
export const store = createStore(persistedReducer, {}, applyMiddleware(logger))
export const persistor = persistStore(store)