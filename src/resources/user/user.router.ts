import { Router } from 'express';
import { login } from './login.controllers';
import { checkAuth } from '../../middlewares';
import { me } from './me.controllers';

const router = Router();

router.post('/login', login);

router.get('/me', checkAuth, me);

export default router;
