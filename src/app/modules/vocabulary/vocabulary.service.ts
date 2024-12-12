import { TVocabulary } from "./vocabulary.interface";
import { VocabularyModel } from "./vocabulary.model";

const createVocabulary = async(payload : TVocabulary) => {
    const result = await VocabularyModel.create(payload)
    return result;
}

const getVocabularies = async() => {
    const result = await VocabularyModel.find()
    return result
}

const updateVocabulary = async(vocabularyId : string, payload : Partial<TVocabulary>) => {
    const result = await VocabularyModel.findByIdAndUpdate(vocabularyId, payload, {
        new: true,
    });
    return result;
}

const deleteVocabulary = async(lessonId : string) => {
    const result = await VocabularyModel.findByIdAndUpdate(lessonId, { isDeleted : true}, {new : true});
    return result;
}

export const VocabularyServices = {
    createVocabulary,
    getVocabularies,
    updateVocabulary,
    deleteVocabulary,
}
