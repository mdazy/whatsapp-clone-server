import { DateTimeResolver, URLResolver } from "graphql-scalars";
import { chats, users, messages } from "../db";

import { Resolvers } from "../../types/graphql";

const resolvers: Resolvers = {
  Date: DateTimeResolver,
  URL: URLResolver,
  Chat: {
    user({ userId }) {
      return users.filter(u => u.id === userId)[0];
    },
    lastMessage({ messageIds }) {
      const lastMessageId = messageIds[messageIds.length - 1];
      return messages.filter(m => m.id === lastMessageId)[0];
    },
    messages({ messageIds }) {
      return messages.filter(m => messageIds.includes(m.id));
    }
  },
  Message: {
    fromUser({ fromUserId }) {
      return users.filter(u => u.id === fromUserId)[0];
    }
  },
  Query: {
    chats() {
      return chats;
    },
    chat(_, { id }) {
      const chatRoom = chats.filter(c => c.id === id);
      if (chatRoom.length === 0) {
        throw new Error(`No chat with id ${id}`);
      }
      return chatRoom[0];
    }
  },
  Mutation: {
    sendMessage(_, { chatId, userId, content }) {
      const chatRoom = chats.filter(c => c.id == chatId);
      if (chatRoom.length === 0) {
        throw new Error(`No chat with id ${chatId}`);
      }
      const user = users.filter(u => u.id === userId);
      if (user.length === 0) {
        throw new Error(`No user with id ${userId}`);
      }
      const id = (messages.length + 1).toString();
      const message = {
        id,
        fromUserId: userId,
        content,
        date: new Date(Date.now())
      };
      messages.push(message);
      chatRoom[0].messageIds.push(message.id);
      return message;
    }
  }
};

export default resolvers;
