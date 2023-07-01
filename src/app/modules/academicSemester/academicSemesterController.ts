import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemesterService';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const result = await academicSemesterService.createAcademicSemester(
      academicSemester
    );

    next();

    sendResponse(res, {
      success: true,
      data: result,
      message: 'success',
      statusCode: 200,
    });
  }
);

export const academicSemesterController = {
  createAcademicSemester,
};
