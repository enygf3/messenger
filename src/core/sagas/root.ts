import { all } from '@redux-saga/core/effects';
import auth from './auth';

export default function* root() {
    yield all([auth()]);
}