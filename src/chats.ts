import users from "./users";
import messages from "./messages";

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

export default chats.map(c => {
  const user = users.filter(u => u.id === c.userId)[0];
  const m = messages.filter(m => m.id === c.lastMessageId)[0];
  return {
    id: c.id,
    user,
    lastMessage: m.content,
    lastMessageDate: m.date
  };
});
