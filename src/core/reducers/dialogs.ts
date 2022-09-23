import { createReducer } from 'typesafe-actions';
import { DialogsType, getDialogsAction } from '../actions/dialogs';
import { AnyAction } from 'redux';
import { DialogsState } from '../../pages/home/types';

const initialState: DialogsState = {
  users: [],
  messages: [],
};

const dialogs = createReducer<DialogsState, DialogsType>(initialState)
  .handleAction(getDialogsAction.request, () => ({
    ...initialState,
  }))
  .handleAction(
    getDialogsAction.success,
    (state: DialogsState, action: AnyAction) => ({
      ...state,
      users: action.payload.payload.users,
      messages: action.payload.payload.messages,
    })
  )
  .handleAction(getDialogsAction.failure, () => ({
    ...initialState,
  }));

export default dialogs;
