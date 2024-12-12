import catchAsync from "../../utils/catchAsync";
import { LessonServices } from "./lesson.service";

const createLessonIntoDB = catchAsync(async (req,res) => {
    const result = await LessonServices.createLesson(req.body);
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Lesson created successfully',
        data: result,
      });
})
const getAllLessonsFromDB = catchAsync(async (req,res) => {
    const result = await LessonServices.getAllLessons();
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'All Lesson retrieved successfully',
        data: result,
      });
})

const updateLessonInDB = catchAsync(async(req,res) => {
    const {lessonId} = req.params
    const result = await LessonServices.updateLesson(lessonId, req.body)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Lesson data updated successfully',
        data: result,
      });
})
const deleteLessonFromDB = catchAsync(async(req,res) => {
    const {lessonId} = req.params
    const result = await LessonServices.deleteLesson(lessonId)
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: 'Lesson data deleted successfully',
        data: result,
      });
})

export const LessonControllers = {
    createLessonIntoDB,
    getAllLessonsFromDB,
    updateLessonInDB,
    deleteLessonFromDB,
}