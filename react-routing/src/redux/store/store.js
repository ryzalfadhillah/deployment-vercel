import { combineReducers } from 'redux'
import { configureStore, createStore } from "@reduxjs/toolkit";
import productSlice from "../slicers/productSlice";
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from "redux-persist"

const reducers = combineReducers({
    product: productSlice
})

const persistconfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistconfig, reducers)

const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor }