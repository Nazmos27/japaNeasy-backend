import { model, Schema } from "mongoose";
import { TVocabulary } from "./vocabulary.interface";

const vocabularySchema = new Schema<TVocabulary>({
    word : {
        type : String,
        required : true
    },
    pronunciation : {
        type : String,
        required : true
    },
    details : {
        type : String,
        required : true
    },
    lessonNo : {
        type : Schema.Types.ObjectId,
        ref : 'lessons',
        required : true
    },
    addedBy : {
        type : Schema.Types.ObjectId,
        ref : 'users',
    },
    isDeleted : {
        type : Boolean,
        default : false
    }
}, {timestamps : true})

export const VocabularyModel = model<TVocabulary>('vocabularies', vocabularySchema)