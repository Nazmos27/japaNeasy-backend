import catchAsync from "../../utils/catchAsync";
import { VocabularyServices } from "./vocabulary.service";

const createVocabularyIntoDB = catchAsync(async(req,res) => {
    const result = await VocabularyServices.createVocabulary(req.body)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Vocabulary created successfully',
        data: result,
      });
})

const getAllVocabulariesFromDB = catchAsync(async(req,res) => {
    const result = await VocabularyServices.getVocabularies()
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'All Vocabularies retrieved successfully',
        data: result,
      });
})

const updateVocabularyInDB = catchAsync(async(req,res) => {
    const {vocabularyId} = req.params
    const result = await VocabularyServices.updateVocabulary(vocabularyId, req.body)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Vocabulary data updated successfully',
        data: result,
      });
})
const deleteVocabularyFromDB = catchAsync(async(req,res) => {
    const {vocabularyId} = req.params
    const result = await VocabularyServices.deleteVocabulary(vocabularyId)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Lesson data deleted successfully',
        data: result,
      });
})


export const VocabularyControllers = {
    createVocabularyIntoDB,
    getAllVocabulariesFromDB,
    updateVocabularyInDB,
    deleteVocabularyFromDB
}