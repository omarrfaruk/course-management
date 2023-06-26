import { RequestHandler } from 'express'
import { userService } from './user.service'
import { z } from 'zod'

const createUsers: RequestHandler = async (req, res, next) => {
  try {
    const createUserZodSchema = z.object({
      body: z.object({
        role: z.string({
          required_error: 'role is required',
        }),
        password: z.string().optional(),
      }),
    })
    await createUserZodSchema.parseAsync(req)

    const { user } = req.body
    const result = await userService.createUser(user)
    res.status(200).json({
      success: true,
      data: result,
      message: 'success',
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createUsers,
}
