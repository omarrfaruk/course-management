import express from 'express';
import { userRouter } from '../app/modules/user/user.route';
import { academicSemesterRouter } from '../app/modules/academicSemester/academicSemesterRoute';
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

routerMapper.map(routes => router.use(routes.path, routes.route));

export default router;
