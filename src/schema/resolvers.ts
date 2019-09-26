import { DateTimeResolver, URLResolver } from "graphql-scalars";
import { chats, users, messages, chatRooms } from "../db";

const resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,
  Chat: {
    user(chat: any) {
      return users.filter(u => u.id === chat.userId)[0];
    },
    lastMessage(chat: any) {
      return messages.filter(m => m.id === chat.lastMessageId)[0];
    }
  },
  ChatRoom: {
    messages(chat: any) {
      const chatRoom = chatRooms.filter(c => c.id === chat.id)[0];
      return chatRoom.messageIds.map(
        id => messages.filter(mm => mm.id === id)[0]
      );
    }
  },
  Query: {
    chats() {
      return chats;
    },
    chat(_: any, params: any) {
      const id = Number(params.id);
      let chatRoom = chatRooms.filter(c => c.id === id);
      if (chatRoom.length === 0) {
        // hmmm which do we want?
        // throw new Error(`No chat with id ${id}`);
        return undefined;
      }
      return { id };
    }
  }
};

export default resolvers;
