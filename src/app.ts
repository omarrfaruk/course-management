import express, { Application } from 'express'
import cors from 'cors'
import globarErrorHandler from './app/middlewares/globalErrorHandler'
import { userRouter } from './app/modules/user/user.route'
import { academicSemesterRouter } from './app/modules/academicSemester/academicSemesterRoute'
const app: Application = express()

app.use(cors())

//parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users', userRouter.router)
app.use('/api/v1/academicSemester', academicSemesterRouter.router)

// app.get('/', (req, res) => {
//   // res.send('Hello World!')
// })

app.use(globarErrorHandler)

export default app
