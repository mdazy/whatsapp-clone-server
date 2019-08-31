import users from "./users";
import messages from "./messages";
import chats from "./chats";

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
