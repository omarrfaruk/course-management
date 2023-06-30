import User from './user.model';
import config from '../../../config';
import { generatedId } from './user.utils';
import ApiError from '../../../errors/ApiError';
import { IUser } from './user.interface';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated id
  const id = await generatedId();
  user.id = id;

  // default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  const createdUser = await User.create(user);
  if (!createUser) {
    throw new ApiError(400, 'failed to create user');
  }
  return createdUser;
};

export const userService = {
  createUser,
};
