export interface Dialog {
  username: string;
  lastMessage: string;
  lastMessageTime: string;
  isRead: boolean;
  isOnline: boolean;
}

export interface Message {
  text: string;
  time: string;
  sentBy: string;
}

export interface DialogsState {
  users: string[];
  messages: Message[];
}
