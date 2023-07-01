import { RequestHandler } from 'express';
import { userService } from './user.service';
import catchAsync from '../../../shared/catchAsync';

const createUsers: RequestHandler = catchAsync(async (req, res, next) => {
  const { user } = req.body;
  const result = await userService.createUser(user);
  next();
  res.status(200).json({
    success: true,
    data: result,
    message: 'success',
  });
});

export const userController = {
  createUsers,
};
