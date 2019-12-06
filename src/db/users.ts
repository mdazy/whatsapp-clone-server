export interface IUser {
  id: string;
  name: string;
  image: string;
}

export const users: IUser[] = [
  {
    id: "1",
    name: "Alice",
    image: "https://randomuser.me/api/portraits/thumb/women/58.jpg"
  },
  {
    id: "2",
    name: "Bob",
    image: "https://randomuser.me/api/portraits/thumb/men/58.jpg"
  },
  {
    id: "3",
    name: "Carl",
    image: "https://randomuser.me/api/portraits/thumb/men/42.jpg"
  }
];
