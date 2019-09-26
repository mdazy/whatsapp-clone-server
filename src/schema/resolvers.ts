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
  Message: {
    fromUser(message: any) {
      console.log(message);
      return users.filter(u => u.id === message.fromUserId)[0];
    }
  },
  Query: {
    chats() {
      return chats;
    },
    chat(_: any, params: any) {
      const id = Number(params.id);
      const chatRoom = chatRooms.filter(c => c.id === id);
      if (chatRoom.length === 0) {
        throw new Error(`No chat with id ${id}`);
      }
      return { id };
    }
  },
  Mutation: {
    sendMessage(_: any, params: any) {
      const chatId = Number(params.chatId);
      const userId = Number(params.userId);
      const chatRoom = chatRooms.filter(c => c.id == chatId);
      if (chatRoom.length === 0) {
        throw new Error(`No chat with id ${chatId}`);
      }
      const user = users.filter(u => u.id === userId);
      if (user.length === 0) {
        throw new Error(`No user with id ${userId}`);
      }
      const messageId = messages.length + 1;
      const message = {
        id: messages.length + 1,
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
