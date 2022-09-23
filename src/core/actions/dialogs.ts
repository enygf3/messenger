import { ActionType, createAsyncAction } from 'typesafe-actions';

export enum DialogsTemplate {
  GetDialogs = 'GET_DIALOGS',
  GetDialogsSuccess = 'GET_DIALOGS_SUCCESS',
  GetDialogsFailure = 'GET_DIALOGS_FAILURE',
}

export const getDialogsAction = createAsyncAction(
  DialogsTemplate.GetDialogs,
  DialogsTemplate.GetDialogsSuccess,
  DialogsTemplate.GetDialogsFailure
)();

export type DialogsType = ActionType<typeof getDialogsAction>;
