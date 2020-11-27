export type User = {
  email: string;
  password: string;
  name: string;
  message: string;
};

export const USERS: User[] = [
  {
    email: 'sean@gomicorp.com',
    password: 'sean123',
    name: 'suho',
    message: 'Hello Cookie',
  },
  {
    email: 'gomi@gomicorp.com',
    password: 'gomi123',
    name: 'gomi',
    message: 'Hello Gomi',
  },
];
