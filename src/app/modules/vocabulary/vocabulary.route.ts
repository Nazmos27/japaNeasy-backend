import express from 'express';
import auth from '../../middlewares/authentication';
import { USER_ROLE } from '../user/user.constant';
import validateRequest from '../../middlewares/validateRequest';
import { createVocabularyValidationSchema, updateVocabularyValidationSchema } from './vocabulary.validation';
import { VocabularyControllers } from './vocabulary.controller';

const router = express.Router()

router.post('/create-vocabulary', auth(USER_ROLE.admin), validateRequest(createVocabularyValidationSchema), VocabularyControllers.createVocabularyIntoDB)

router.get('/', VocabularyControllers.getAllVocabulariesFromDB)

router.patch('/update-vocabulary/:vocabularyId', auth(USER_ROLE.admin), validateRequest(updateVocabularyValidationSchema), VocabularyControllers.updateVocabularyInDB )

router.delete('/delete-vocabulary/:vocabularyId', auth(USER_ROLE.admin), VocabularyControllers.deleteVocabularyFromDB)


export const VocabularyRoutes = router;