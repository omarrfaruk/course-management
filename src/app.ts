import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import userRouter from './app/modules/user/user.route'
import globarErrorHandler from './app/middlewares/globalErrorHandler'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use(globarErrorHandler)

export default app
