import { createSelector } from 'reselect';

export const dialogsStateSelector = createSelector(
  (state: any) => state.dialogs,
  (dialogs) => dialogs
);
