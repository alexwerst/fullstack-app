import express from 'express';
import { Router } from 'express';

import { userController } from '../controllers';

const router: Router = express.Router();

router.get('/init-user', userController.initUser);

export default router;
