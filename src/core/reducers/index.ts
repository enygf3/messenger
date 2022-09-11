import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import root from '../sagas/root';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    auth: auth,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware],
    devTools: true,
});

sagaMiddleware.run(root);

export default store;