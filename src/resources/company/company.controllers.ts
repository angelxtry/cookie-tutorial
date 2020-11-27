import { Request, Response } from 'express';
import { COMPANY_INFO } from './companyData';

export const getCompanyInfo = async (_: Request, res: Response) => {
  // console.log('me!!!', res.locals.decoded);
  try {
    return res.status(200).send(COMPANY_INFO);
  } catch (e) {
    console.log(e);
    return res.sendStatus(500);
  }
};
