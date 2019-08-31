interface IMessage {
  id: number;
  content: string;
  date: Date;
}

const messages: IMessage[] = [
  { id: 1, content: "Hi there", date: new Date(Date.now() - 60 * 60 * 1000) },
  {
    id: 2,
    content: "Be right back",
    date: new Date(Date.now() - 10 * 60 * 60 * 1000)
  },
  {
    id: 3,
    content: "Let's get this done",
    date: new Date(Date.now() - 3 * 60 * 60 * 1000)
  }
];

export default messages;
