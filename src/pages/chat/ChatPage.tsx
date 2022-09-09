import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import {ChatDialog} from "./types";
import './styles.sass'

const ChatPage = () => {
    const [dialog, setDialog] = useState<ChatDialog>({
        messages: [
            {
                text: 'Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?Hello, how are you?',
                time: '12:00',
                fromMe: false,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
            {
                text: 'I\'m fine, thanks! You?',
                time: '12:33',
                fromMe: true,
            },
        ],
        user: 'John Doe',
    })
    return (
        <>
            <header>
                <div className='row jst-start chat'>
                    <div className='dialog-img'>
                        <p>{dialog.user[0]}</p>
                    </div>
                    <h3>{dialog.user}</h3>
                    <div className='chat-settings'>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                    </div>
                </div>
            </header>
            <main>
                <div className='column dialogs chat-dialogs'>
                    { dialog.messages?.map(item => {
                        return <div className='row dialog message'>
                            <div className='dialog-img'>
                                <p>{item.fromMe ? dialog.user[0] : 'ME'}</p>
                            </div>
                            <div className='column'>
                                <h3>
                                    {item.fromMe ? 'You' : dialog.user}
                                </h3>
                                <p>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    }) }
                </div>
                <div className='chat-input'>
                    <input type='text' placeholder='Type your message'/>
                </div>
            </main>
        </>
    )
}

export default ChatPage