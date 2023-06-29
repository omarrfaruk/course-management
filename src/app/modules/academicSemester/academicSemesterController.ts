import { RequestHandler } from 'express'
import { academicSemesterService } from './academicSemesterService'

const createAcademicSemester: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemester } = req.body
    const result = await academicSemesterService.createAcademicSemester(
      academicSemester
    )
    res.status(200).json({
      success: true,
      data: result,
      message: 'success',
    })
  } catch (error) {
    next(error)
  }
}

export const academicSemesterController = {
  createAcademicSemester,
}
