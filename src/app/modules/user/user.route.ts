import express from 'express'
import { createUsers } from './user.controller'

const router = express.Router()

router.post('/create-user', createUsers)

export default router
