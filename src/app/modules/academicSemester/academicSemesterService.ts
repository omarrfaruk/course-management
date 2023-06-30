import ApiError from '../../../errors/ApiError';
import { academicSemesterMapper } from './academicSemesterConstant';
import academicSemesterUser from './academicSemesterModel';
import { IAcademicSemester } from './academicSemisterInterface';

const createAcademicSemester = async (
  payload: IAcademicSemester
): Promise<IAcademicSemester | null> => {
  if (academicSemesterMapper[payload.title] !== payload.code) {
    throw new ApiError(400, 'Invalid semester code');
  }
  const createdUser = await academicSemesterUser.create(payload);
  if (!createAcademicSemester) {
    throw new ApiError(400, 'failed to create academic user');
  }
  return createdUser;
};

export const academicSemesterService = {
  createAcademicSemester,
};
