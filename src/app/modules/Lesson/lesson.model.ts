import { model, Schema } from "mongoose";
import { TLesson } from "./lesson.interface";

const lessonSchema = new Schema<TLesson>({
    name : {
        type: String,
        required: true
    },
    number : {
        type: Number,
        required: true,
        unique : true
    },
    isDeleted : {
        type: Boolean,
        default: false
    }
},{timestamps: true})

lessonSchema.pre(["find", "findOne"], function () {
    this.where({ isDeleted: false });
});

export const LessonModel = model<TLesson>('lessons', lessonSchema)