interface IChatSummary {
  id: number;
  userId: number;
  lastMessageId: number;
}

interface IChatRoom {
  id: number;
  messageIds: number[];
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

const chatRooms: IChatRoom[] = [
  {
    id: 1,
    messageIds: [1]
  },
  {
    id: 2,
    messageIds: [2]
  },
  {
    id: 3,
    messageIds: [3]
  }
];

export { chatRooms };

export default chats;
