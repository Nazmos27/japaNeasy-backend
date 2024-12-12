import { z } from 'zod';

export const createLessonValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required.'),
    number: z
      .number({ required_error: 'Number is required.' })
      .int('Number must be an integer.')
      .positive('Number must be a positive integer.'),
  }),
});
export const updateLessonValidationSchema = z.object({
  body: z.object({
    name: z.string().nonempty('Name is required.').optional(),
    number: z
      .number({ required_error: 'Number is required.' })
      .int('Number must be an integer.')
      .positive('Number must be a positive integer.').optional(),
  }),
});
