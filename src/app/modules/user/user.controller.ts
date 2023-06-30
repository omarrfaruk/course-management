import { RequestHandler } from 'express';
import { userService } from './user.service';

const createUsers: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body;
    const result = await userService.createUser(user);
    res.status(200).json({
      success: true,
      data: result,
      message: 'success',
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUsers,
};
