import { Types } from "mongoose";

export type TVocabulary = {
    word : string;
    pronunciation : string;
    details : string;
    lessonNo : Types.ObjectId;
    addedBy : Types.ObjectId;
    isDeleted : boolean;
}