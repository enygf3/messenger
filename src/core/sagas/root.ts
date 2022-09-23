import { all } from '@redux-saga/core/effects';
import auth from './auth';
import dialogs from './dialogs';

export default function* root() {
  yield all([auth(), dialogs()]);
}
