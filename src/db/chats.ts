interface IChatSummary {
  id: number;
  userId: number;
  lastMessageId: number;
}

const chats: IChatSummary[] = [
  {
    id: 1,
    userId: 1,
    lastMessageId: 1
  },
  {
    id: 2,
    userId: 2,
    lastMessageId: 2
  },
  {
    id: 3,
    userId: 3,
    lastMessageId: 3
  }
];

export default chats;
