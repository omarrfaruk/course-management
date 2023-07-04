import { NextFunction, Request, Response } from 'express';
import { academicSemesterService } from './academicSemesterService';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
// import { IPaginationOptions } from '../../../interfaces/paginationOptions';
import pick from '../../../shared/pick';
import { paginationFields } from '../../constants/pagination';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemester } = req.body;
    const result = await academicSemesterService.createAcademicSemester(
      academicSemester
    );

    sendResponse(res, {
      success: true,
      data: result,
      message: 'success',
      statusCode: 200,
    });
    next();
  }
);

//get semester

const getSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const paginationOptions = pick(req.query, paginationFields);
    console.log(paginationOptions);
    // const result = await academicSemesterService.getAcademicSemester(
    //   paginationOptions
    // );
    // sendResponse(res, {
    //   success: true,
    //   data: result,
    //   message: 'success',
    //   statusCode: 200,
    // });
    next();
  }
);

export const academicSemesterController = {
  createAcademicSemester,
  getSemester,
};
