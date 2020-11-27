import { Router } from 'express';
import { checkAuth } from '../../middlewares';
import { getCompanyInfo } from './company.controllers';

const router = Router();

router.get('/', checkAuth, getCompanyInfo);

export default router;
