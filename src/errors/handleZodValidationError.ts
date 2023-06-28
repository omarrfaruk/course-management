import { ZodError, ZodIssue } from 'zod'
import { IgenericErrorMessages } from '../interfaces/error'
import { IgenericErrorResponse } from '../interfaces/errorResponse'

const handleZodValidationError = (error: ZodError): IgenericErrorResponse => {
  const errors: IgenericErrorMessages[] = error.issues.map(
    (issue: ZodIssue) => {
      return {
        path: issue.path[issue.path.length - 1],
        message: issue.message,
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

export default handleZodValidationError
