import { configureStore } from '@reduxjs/toolkit'
import health from './Features'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: "root",
  version: 1,
  storage
}

const reducer = combineReducers({
  Commerce: health,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer,
})