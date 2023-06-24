import { NextFunction, Request, Response } from 'express'
import { createUser } from './user.service'

export const createUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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
