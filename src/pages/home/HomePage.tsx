import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars, faPen } from '@fortawesome/free-solid-svg-icons'
import './styles.sass'
import { Dialog } from "./types"
import {Link} from "react-router-dom";

const HomePage = () => {
    const [dialogs, setDialogs] = useState<Dialog[]>([
        {
            username: 'John Doe',
            lastMessage: 'Hello, how are you?',
            lastMessageTime: '12:00',
            isRead: false,
            isOnline: true,
        },
        {
            username: 'Luke L',
            lastMessage: 'Hey, what are you doing?',
            lastMessageTime: '09:11',
            isRead: true,
            isOnline: true,
        },
        {
            username: 'Jack Sparrow',
            lastMessage: 'I am looking for a treasure',
            lastMessageTime: '02:00',
            isRead: true,
            isOnline: false,
        }
    ])

    const cutText = (text: string, length: number) => {
        return text.length > length ? text.slice(0, length) + '...' : text
    }

    return (
        <>
            <header className='row'>
                <FontAwesomeIcon icon={faBars} />
                <div className='header-search'>
                    <input type='search'/>
                    <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                </div>
            </header>
            <main>
                <div className='column dialogs'>
                    <h3>Messages</h3>
                    { dialogs?.map(item => {
                        return <div className='row dialog'>
                            <div className='circle-img'>
                                <p>{item.username[0]}</p>
                            </div>
                            <div className='column'>
                                <h3>{item?.username}</h3>
                                <p>
                            <span>
                                {item?.lastMessageTime}
                            </span>
                                    {cutText(item?.lastMessage, 19)}
                                </p>
                            </div>
                        </div>
                    }) }
                </div>
                <Link to='/chat'>
                    <div className='main-btn new-msg'>
                        <FontAwesomeIcon icon={faPen} />
                    </div>
                </Link>
            </main>
        </>
  );
}

export default HomePage;