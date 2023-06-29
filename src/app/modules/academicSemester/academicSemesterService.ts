import ApiError from '../../../errors/ApiError'
import academicSemesterUser from './academicSemesterModel'
import { IAcademicSemester } from './academicSemisterInterface'

const createAcademicSemester = async (
  user: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  const createdUser = await academicSemesterUser.create(user)
  if (!createAcademicSemester) {
    throw new ApiError(400, 'failed to create academic user')
  }
  return createdUser
}

export const academicSemesterService = {
  createAcademicSemester,
}
