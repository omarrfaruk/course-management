import mongoose from 'mongoose'
import { IgenericErrorMessages } from '../interfaces/error'
import { IgenericErrorResponse } from '../interfaces/errorResponse'

const handleValidationError = (
  error: mongoose.Error.ValidationError
): IgenericErrorResponse => {
  const errors: IgenericErrorMessages[] = Object.values(error.errors).map(
    (el: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: el?.path,
        message: el?.message,
      }
    }
  )

  const statusCode = 400

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages: errors,
  }
}

export default handleValidationError
