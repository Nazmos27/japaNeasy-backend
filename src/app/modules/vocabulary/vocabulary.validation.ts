import { z } from "zod";

export const createVocabularyValidationSchema = z.object({
    body : z.object({
        word: z.string().nonempty("Word is required."),
        pronunciation: z.string().nonempty("Pronunciation is required."),
        details: z.string().nonempty("Details are required."),
        lessonNo: z.string().nonempty("Lesson number is required."), // Assuming ObjectId is passed as a string
        addedBy: z.string().optional(), // Optional field
        isDeleted: z.boolean().optional(), // Optional since it has a default
})
});
export const updateVocabularyValidationSchema = z.object({
    body : z.object({
        word: z.string().nonempty("Word is required.").optional(),
        pronunciation: z.string().nonempty("Pronunciation is required.").optional(),
        details: z.string().nonempty("Details are required.").optional(),
        lessonNo: z.string().nonempty("Lesson number is required.").optional(), // Assuming ObjectId is passed as a string
        addedBy: z.string().optional(), // Optional field
        isDeleted: z.boolean().optional(), // Optional since it has a default
})
});