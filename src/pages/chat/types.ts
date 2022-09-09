export interface Message {
    text: string;
    time: string;
    fromMe: boolean;
}

export interface ChatDialog {
    messages: Message[];
    user: string;
}