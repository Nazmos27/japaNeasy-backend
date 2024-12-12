import { Router } from 'express';

import { AuthRoutes } from '../modules/auth/auth.route';
import { UserRoutes } from '../modules/user/user.route';
import { LessonRoutes } from '../modules/lesson/lesson.route';
import { VocabularyRoutes } from '../modules/vocabulary/vocabulary.route';

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
  },
  {
    path : '/vocabularies',
    route : VocabularyRoutes
  }
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
