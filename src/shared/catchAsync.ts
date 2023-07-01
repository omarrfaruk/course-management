import { Request, RequestHandler, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';

const catchAsync =
  (fn: RequestHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
export default catchAsync;
