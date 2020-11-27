import { Request, Response } from 'express';
import { USERS } from './userData';

export const me = async (_: Request, res: Response) => {
  console.log('me!!!', res.locals.decoded);
  const { email }: { email: string } = res.locals.decoded.user;
  console.log('me!!!', email);
  try {
    const authUser = USERS.filter((user) => user.email === email)[0];
    console.log('me!!!', authUser);

    if (!authUser) return res.sendStatus(401);

    return res.status(200).send(authUser);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};
