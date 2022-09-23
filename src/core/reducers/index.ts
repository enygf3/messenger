import createSagaMiddleware from 'redux-saga';
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import auth from './auth';
import root from '../sagas/root';
import dialogs from './dialogs';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth,
  dialogs,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: true,
});

sagaMiddleware.run(root);

export default store;
