import express from 'express';
import validateUser from '../../middlewares/validateRequest';
import { academicSemesterZodSchema } from './academicSemesterValidation';
import { academicSemesterController } from './academicSemesterController';

const router = express.Router();

router.post(
  '/create-academicSemester',
  validateUser(academicSemesterZodSchema.createAcademicSemesterZodSchema),
  academicSemesterController.createAcademicSemester
);

router.get('/get-academicSemester', academicSemesterController.getSemester);

export const academicSemesterRouter = {
  router,
};
