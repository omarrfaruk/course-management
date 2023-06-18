import IUser from './user.interface'
import User from './user.model'

export const createUser = async (user: IUser): Promise<IUser | null> => {
  const createdUser = await User.create(user)
  if (!createUser) {
    throw new Error('failed to create user')
  }
  return createdUser
}
