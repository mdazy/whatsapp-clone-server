import users from "./users";
import messages from "./messages";
import chats, { chatRooms } from "./chats";

export { users, messages, chats, chatRooms };

export default chats.map(c => {
  const user = users.filter(u => u.id === c.userId)[0];
  const lastMessage = messages.filter(m => m.id === c.lastMessageId)[0];
  return {
    id: c.id,
    user,
    lastMessage
  };
});
