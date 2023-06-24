import { NextFunction, Request, Response } from 'express'
import { IgenericErrorMessages } from '../../interfaces/error'
import config from '../../config'

const globarErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = 500
  const message = 'something went wrong'
  const errorMessages: IgenericErrorMessages[] = []

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  })
  next()
}

export default globarErrorHandler
