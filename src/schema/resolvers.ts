import { DateTimeResolver, URLResolver } from "graphql-scalars";
import { chats, users, messages } from "../db";

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
  Query: {
    chats() {
      return chats;
    }
  }
};

export default resolvers;
