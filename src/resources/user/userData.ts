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
    email: 'admin@gomicorp.com',
    password: 'admin123',
    name: 'admin',
    message: 'Admin Cookie',
  },
];
