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
      const lastMessageId = chat.messageIds[chat.messageIds.length - 1];
      return messages.filter(m => m.id === lastMessageId)[0];
    },
    messages(chat: any) {
      return messages.filter(m => chat.messageIds.includes(m.id));
    }
  },
  Message: {
    fromUser(message: any) {
      return users.filter(u => u.id === message.fromUserId)[0];
    }
  },
  Query: {
    chats() {
      return chats;
    },
    chat(_: any, params: any) {
      const id = Number(params.id);
      const chatRoom = chats.filter(c => c.id === id);
      if (chatRoom.length === 0) {
        throw new Error(`No chat with id ${id}`);
      }
      return chatRoom[0];
    }
  },
  Mutation: {
    sendMessage(_: any, params: any) {
      const chatId = Number(params.chatId);
      const userId = Number(params.userId);
      const chatRoom = chats.filter(c => c.id == chatId);
      if (chatRoom.length === 0) {
        throw new Error(`No chat with id ${chatId}`);
      }
      const user = users.filter(u => u.id === userId);
      if (user.length === 0) {
        throw new Error(`No user with id ${userId}`);
      }
      const id = messages.length + 1;
      const message = {
        id,
        fromUserId: userId,
        content: params.content,
        date: new Date(Date.now())
      };
      messages.push(message);
      chatRoom[0].messageIds.push(message.id);
      return message;
    }
  }
};

export default resolvers;
