import {
  collection,
  limit,
  orderBy,
  query,
  startAfter,
  where,
} from 'firebase/firestore';
import { firestore as db } from '../configs/firebase';

export function dialogsQuery(user: string, start: number) {
  return start !== 0
    ? query(
        collection(db, 'dialogs'),
        where('users', 'array-contains', user),
        orderBy('time', 'desc'),
        startAfter(start),
        limit(15)
      )
    : query(
        collection(db, 'dialogs')
        // where('messages', '!=', null),
        // limit(15)
      );
}
