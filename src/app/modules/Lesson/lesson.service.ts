import { TLesson } from "./lesson.interface";
import { LessonModel } from "./lesson.model";

const createLesson = async(payload : TLesson) => {
    const result = await LessonModel.create(payload)
    return result;
}

const getAllLessons = async() => {
    const result = await LessonModel.find()
    return result;
}

const updateLesson = async(lessonId : string, payload : Partial<TLesson>) => {
    const result = await LessonModel.findByIdAndUpdate(lessonId, payload, {
        new: true,
    });
    return result;
}

const deleteLesson = async(lessonId : string) => {
    const result = await LessonModel.findByIdAndUpdate(lessonId, { isDeleted : true}, {new : true});
    return result;
}

export const LessonServices = {
    createLesson,
    getAllLessons,
    updateLesson,
    deleteLesson,
}