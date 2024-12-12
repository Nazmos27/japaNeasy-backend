import express from 'express';
import auth from '../../middlewares/authentication';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { LessonControllers } from './lesson.controller';
import { createLessonValidationSchema, updateLessonValidationSchema } from './lesson.validaiton';

const router = express.Router();

router.post(
  '/create-lesson',
  auth(USER_ROLE.admin),
  validateRequest(createLessonValidationSchema),
  LessonControllers.createLessonIntoDB,
);

router.get('/', LessonControllers.getAllLessonsFromDB);

router.patch('/update-lesson/:lessonId', auth(USER_ROLE.admin), validateRequest(updateLessonValidationSchema), LessonControllers.updateLessonInDB )

router.delete('/delete-lesson/:lessonId', auth(USER_ROLE.admin), LessonControllers.deleteLessonFromDB)

export const LessonRoutes = router;
