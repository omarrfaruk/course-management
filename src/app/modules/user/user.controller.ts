import { RequestHandler } from 'express'
import { createUser } from './user.service'

export const createUsers: RequestHandler = async (req, res, next) => {
  try {
    const { user } = req.body
    const result = await createUser(user)
    res.status(200).json({
      success: true,
      data: result,
      message: 'success',
    })
  } catch (error) {
    next(error)
  }
}
