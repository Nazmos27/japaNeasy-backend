import { Router } from 'express';

import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { LessonRoutes } from '../modules/Lesson/lesson.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path : '/lessons',
    route : LessonRoutes,
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
