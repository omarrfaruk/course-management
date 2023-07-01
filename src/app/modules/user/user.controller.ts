import { RequestHandler } from 'express';
import { userService } from './user.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createUsers: RequestHandler = catchAsync(async (req, res, next) => {
  const { user } = req.body;
  const result = await userService.createUser(user);
  sendResponse(res, {
    success: true,
    data: result,
    message: 'success',
    statusCode: 200,
  });
  next();
});

export const userController = {
  createUsers,
};
