import { Router } from 'express';
import { login } from './login.controllers';

const router = Router();

router.post('/', login);

export default router;
