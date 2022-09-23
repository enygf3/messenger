import { Timestamp, getDocs, onSnapshot } from 'firebase/firestore';
import { firestore as db } from '../configs/firebase';
import { dialogsQuery } from '../queries/messages';

export const getDialogs = async (user: string, start: number) => {
  return await getDocs(dialogsQuery(user, start)).then((docs) => {
    return docs.docs.map((doc) => doc.data());
  });
};
