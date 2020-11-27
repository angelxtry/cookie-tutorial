import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { common } from '../../config';
import { USERS } from './userData';

interface LoginRequest {
  email: string;
  password: string;
}

export const login = async (req: Request, res: Response) => {
  const { email, password }: LoginRequest = req.body;

  try {
    const existedUser = USERS.filter((user) => user.email === email)[0];

    if (!existedUser) return res.sendStatus(401);

    if (existedUser.password !== password) return res.sendStatus(401);

    const payload = { user: { email } };

    console.log('login-payload:', payload);
    const token = jwt.sign(payload, common.jwtSecret, {
      expiresIn: '1d',
    });

    res.cookie('path', '/path', { path: '/' });
    res.cookie('maxAge', '15min', { maxAge: 900000 });
    res.cookie('authcookie', token);
    // res.cookie('authcookie', token, {
    //   // expires: new Date(Date.now() + 86400e3),
    //   maxAge: 900000,
    //   // httpOnly: true,
    //   // sameSite: 'none',
    //   // domain: 'localhost:3333',
    //   // secure: true,
    // });

    return res.status(200).send({
      message: 'login success',
      token,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};
