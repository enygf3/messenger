import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faPen } from '@fortawesome/free-solid-svg-icons';
import './styles.sass';
import { Dialog, DialogsState } from './types';
import { Link } from 'react-router-dom';
import { DialogsTemplate, getDialogsAction } from '../../core/actions/dialogs';
import { useDispatch, useSelector } from 'react-redux';
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { dialogsQuery } from '../../core/queries/messages';
import { firestore } from '../../core/configs/firebase';

const HomePage = () => {
  const dispatch = useDispatch();
  // const [dialogs, setDialogs] = useState<Dialog[]>([]);
  const [messages, setMessages] = useState<any[]>([]);
  const [dialogs, setDialogs] = useState<any[]>([]);

  useEffect(() => {
    // onSnapshot(
    //   query(
    //     collection(firestore, 'messages'),
    //     where('users', 'array-contains', 'enygf')
    //   ),
    //   (snapshot) => {
    //     const uniqueMessages = new Set();
    //     snapshot.forEach((doc) => {
    //       uniqueMessages.add(doc.data());
    //     });
    //     setMessages(Array.from(uniqueMessages));
    //   }
    // );

    onSnapshot(
      query(
        collection(firestore, 'dialogs'),
        where('users', 'array-contains', 'enygf')
      ),
      (snapshot) => {
        const uniqueDialogs = new Set();
        snapshot.forEach((doc) => {
          uniqueDialogs.add(doc.data().users);
        });
        setDialogs(
          Array.from(uniqueDialogs)
            .flat(1)
            .filter((user) => user !== 'enygf')
        );
      }
    );
  }, []);

  const cutText = (text: string, length: number) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
  };

  return (
    <>
      <header className="row">
        <FontAwesomeIcon icon={faBars} />
        <div className="header-search">
          <input type="search" />
          <span>
            <FontAwesomeIcon icon={faSearch} />
          </span>
        </div>
      </header>
      <main>
        <div className="column dialogs">
          <h3>Messages</h3>
          {dialogs?.map((item, index) => {
            return (
              <div className="row dialog" key={index}>
                <div className="circle-img">
                  <p>{item !== 'enygf' && item[0]}</p>
                </div>
                <div className="column">
                  <h3>{item !== 'enygf' && item}</h3>
                  {/*<p>*/}
                  {/*  <span>{item?.lastMessageTime}</span>*/}
                  {/*  {cutText(item?.lastMessage, 19)}*/}
                  {/*</p>*/}
                </div>
              </div>
            );
          })}
        </div>
        <Link to="/chat">
          <div className="main-btn new-msg">
            <FontAwesomeIcon icon={faPen} />
          </div>
        </Link>
      </main>
    </>
  );
};

export default HomePage;
