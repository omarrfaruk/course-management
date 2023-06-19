import IUser from './user.interface'
import User from './user.model'
import config from '../../config'
import { generatedId } from './user.utils'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  //auto generated id
  const id = await generatedId()
  user.id = id
  // default password
  user.password ? user.password : config.default_user_pass

  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}
