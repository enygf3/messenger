import React, {ChangeEvent, useState, KeyboardEvent, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faFaceSmile, faGear, faLocationDot } from "@fortawesome/free-solid-svg-icons";
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

        ],
        user: 'John Doe',
    })
    const messagesRef = useRef<HTMLDivElement>(null)

    const smoothScrollToBottom = () => {
        setTimeout(() => {
            if (messagesRef.current) {
                messagesRef.current.scrollTo({
                    behavior: 'smooth', top: messagesRef.current.scrollHeight
                })
            }
        }, 0)
    }

    const pushMessage = (message: string, date: string) => {
        setDialog({
            ...dialog,
            messages: [
                ...dialog.messages,
                {
                    text: message,
                    time: date,
                    fromMe: true,
                }
            ]
        })

            smoothScrollToBottom()
    }

    const handleMessage = (event: KeyboardEvent) => {
        const target = event.target as HTMLInputElement
        const date = new Date().toLocaleTimeString().split(':')
        console.log(target.value)
        if (event.key === 'Enter') {
            pushMessage(target.value, `${date[0]}:${date[1]}`)
            target.value = ''
        }
    }

    return (
        <>
            <main>
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
                <div ref={messagesRef} className='column dialogs chat-dialogs'>
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
                </div >
                <div className='chat-input'>
                    <input type='text' placeholder='Type your message' onKeyUp={handleMessage}/>
                    <div className='row jst-start'>
                        <FontAwesomeIcon className='fa-lg' icon={faFaceSmile} />
                        <FontAwesomeIcon className='fa-lg' icon={faLocationDot} />
                        <FontAwesomeIcon className='fa-lg' icon={faGear} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default ChatPage