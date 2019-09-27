interface IChatSummary {
  id: number;
  userId: number;
  messageIds: number[];
}

const chats: IChatSummary[] = [
  {
    id: 1,
    userId: 1,
    messageIds: [1]
  },
  {
    id: 2,
    userId: 2,
    messageIds: [2]
  },
  {
    id: 3,
    userId: 3,
    messageIds: [3]
  }
];

export default chats;
