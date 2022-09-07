import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
import './styles.sass'
import { Dialog } from "./types"

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

    return (
        <>
            <header className='row'>
                <FontAwesomeIcon icon={faBars} />
                <div className='header-search'>
                    <input type='text'/>
                    <span>
                    <FontAwesomeIcon icon={faSearch} />
                </span>
                </div>
            </header>
            <main>
                <div className='column'>
                    { dialogs?.map(item => {
                        return <div className='column dialog'>
                            <h3>{item?.username}</h3>
                            <p>
                            <span>
                                {item?.lastMessageTime}
                            </span>
                                {item?.lastMessage}
                            </p>
                        </div>
                    }) }
                </div>
            </main>
        </>
  );
}

export default HomePage;