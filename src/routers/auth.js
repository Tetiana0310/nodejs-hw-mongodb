import { Router } from 'express';
import { validateBody } from '../middlewares/validateBody.js';
import { registerUserSchema } from '../validation/auth.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { registerUserController } from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
    '/register',
    (req, res, next) => {
        console.log('Request to /auth/register received:', req.body);
        next();
    },
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

export default authRouter;
