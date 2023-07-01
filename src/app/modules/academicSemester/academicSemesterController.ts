import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemesterService';
import catchAsync from '../../../shared/catchAsync';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const result = await academicSemesterService.createAcademicSemester(
      academicSemester
    );

    next();
    res.status(200).json({
      success: true,
      data: result,
      message: 'success',
    });
  }
);

export const academicSemesterController = {
  createAcademicSemester,
};
