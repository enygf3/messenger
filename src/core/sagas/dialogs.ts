import { takeEvery, put } from '@redux-saga/core/effects';
import { AnyAction } from 'redux';
import { toast } from 'react-hot-toast';
import { getDialogsAction } from '../actions/dialogs';
import { getDialogs } from '../services/dialogs';

export function* dialogsWorker(payload: AnyAction): Generator {
  try {
    const dialogs = yield getDialogs(
      payload.payload.user,
      payload.payload.start
    ).then();
    console.log(dialogs, payload.payload);
    yield put(getDialogsAction.success(dialogs, null));
  } catch (error) {
    yield toast.error('Something is went wrong. Please, try again');
    yield put(getDialogsAction.failure(null, null));
  }
}

export default function* dialogs(): Generator {
  yield takeEvery(getDialogsAction.request, dialogsWorker);
}
