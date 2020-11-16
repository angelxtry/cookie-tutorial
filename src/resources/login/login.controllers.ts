import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { common } from '../../config';
import { USERS } from '../userData';

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

    const token = jwt.sign(payload, common.jwtSecret, {
      expiresIn: '1d',
    });

    res.cookie('authcookie', token, {
      maxAge: 900000,
      // httpOnly: true,
      sameSite: 'none',
      domain: 'cookie-tutorial.gomistore.com',
      secure: process.env.NODE_ENV === 'production' ? true : false,
    });

    return res.status(200).send({
      message: 'login success',
      token,
    });
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};
