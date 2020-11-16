import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { common } from '../config';

export const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.authcookie;
  console.log('checkAuth', req.cookies);
  console.log('checkAuth', token);

  if (!token) return res.sendStatus(401);

  try {
    const decoded = jwt.verify(token, common.jwtSecret);

    if (!decoded) return res.sendStatus(401);

    res.locals.decoded = decoded;

    return next();
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};
