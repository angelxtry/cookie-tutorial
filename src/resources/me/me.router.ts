import { Router } from 'express';
import { checkAuth } from '../../middlewares';
import { me } from './me.controllers';

const router = Router();

router.get('/', checkAuth, me);

export default router;
