import express from 'express';
import { userController } from './user.controller';
import { userZodSchema } from './user.validation';
import validateUser from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-user',
  validateUser(userZodSchema.createUserZodSchema),
  userController.createUsers
);

export const userRouter = {
  router,
};
