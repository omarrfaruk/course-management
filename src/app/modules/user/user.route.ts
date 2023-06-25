import express from 'express'
import { userController } from './user.controller'

const router = express.Router()

router.post('/create-user', userController.createUsers)

export const userRouter = {
  router,
}
