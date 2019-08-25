export interface IChatSummary {
  id: number;
  user: {
    id: number;
    name: string;
    image: string;
  };
  lastMessage: string;
  lastMessageDate: Date;
}

const chats: IChatSummary[] = [
  {
    id: 1,
    user: {
      id: 1,
      name: "Alice",
      image: "https://randomuser.me/api/portraits/thumb/women/58.jpg"
    },
    lastMessage: "Hi there",
    lastMessageDate: new Date(Date.now() - 60 * 60 * 1000)
  },
  {
    id: 2,
    user: {
      id: 2,
      name: "Bob",
      image: "https://randomuser.me/api/portraits/thumb/men/58.jpg"
    },
    lastMessage: "Be right back",
    lastMessageDate: new Date(Date.now() - 10 * 60 * 60 * 1000)
  },
  {
    id: 3,
    user: {
      id: 3,
      name: "Carl",
      image: "https://randomuser.me/api/portraits/thumb/men/42.jpg"
    },
    lastMessage: "Let's get this done",
    lastMessageDate: new Date(Date.now() - 3 * 60 * 60 * 1000)
  }
];

export default chats;
