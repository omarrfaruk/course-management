import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createUsers = async (req: Request, res: Response) => {
  try {
    const { user } = req.body
    const result = await createUser(user)
    res.status(200).json({
      success: true,
      data: result,
      message: 'success',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
    })
  }
}
