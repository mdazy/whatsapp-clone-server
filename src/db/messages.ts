interface IMessage {
  id: string;
  fromUserId: string;
  content: string;
  date: Date;
}

const messages: IMessage[] = [
  {
    id: "1",
    fromUserId: "1",
    content: "Hi there",
    date: new Date(2019, 8, 13, 8, 30)
  },
  {
    id: "2",
    fromUserId: "2",
    content: "Be right back",
    date: new Date(2019, 8, 12, 23, 15)
  },
  {
    id: "3",
    fromUserId: "3",
    content: "Let's get this done",
    date: new Date(2019, 8, 11, 15, 30)
  }
];

export default messages;
