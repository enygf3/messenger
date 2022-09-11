import React, {useState, KeyboardEvent, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faFaceSmile, faGear, faLocationDot, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
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
    const chatHeaderRef = useRef<HTMLDivElement>(null)
    const searchBarRef = useRef<HTMLInputElement>(null)

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

    const toggleBars = () => {
        if (chatHeaderRef.current && searchBarRef.current) {
            chatHeaderRef.current.classList.toggle('header-hide')
            searchBarRef.current.classList.toggle('search-active')
        }
    }

    const closeSearch = (event: UIEvent) => {
        const target = event.target as HTMLInputElement
        if (!target.classList.contains('search-active')) {
            window.removeEventListener('click', closeSearch)
            toggleBars()
        }
    }

    const openSearch = () => {
        if (chatHeaderRef.current && searchBarRef.current) {
            toggleBars()
            searchBarRef.current.focus()
            setTimeout(() => {
                if (searchBarRef.current && searchBarRef.current.classList.contains('search-active')) {
                    window.addEventListener('click', closeSearch)
                }
            }, 0)
        }
    }

    return (
        <>
            <main>
                <header>
                    <div className='row jst-start chat-header' ref={chatHeaderRef}>
                        <div className='circle-img'>
                            <p>{dialog.user[0]}</p>
                        </div>
                        <h3>{dialog.user}</h3>
                        <div className='chat-settings'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} onClick={openSearch} />
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </div>
                    </div>
                    <input className='search input' ref={searchBarRef}/>
                </header>
                <div ref={messagesRef} className='column dialogs chat-dialogs'>
                    { dialog.messages?.map((item, index) => {
                        return <div className='row dialog message' key={index}>
                            <div className='circle-img'>
                                <p>{!item.fromMe ? dialog.user[0] : 'You'}</p>
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
                    <input className='input' placeholder='Type your message' onKeyUp={handleMessage}/>
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