import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { academicSemesterRouter } from '../modules/academicSemester/academicSemesterRoute';
const router = express.Router();

const routerMapper = [
  {
    path: '/users',
    route: userRouter.router,
  },
  {
    path: '/academicSemester',
    route: academicSemesterRouter.router,
  },
];

routerMapper.forEach(routes => router.use(routes.path, routes.route));

export default router;
