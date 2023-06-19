import { Request, Response } from 'express'
import { createUser } from './user.service'

export const createUsers = async (req: Request, res: Response) => {
  try {
    const data = req.body
    const user = await createUser(data)
    res.status(200).json({
      success: true,
      data: user,
      message: 'success',
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'something went wrong',
    })
  }
}
