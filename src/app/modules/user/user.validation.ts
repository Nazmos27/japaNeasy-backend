import { z } from 'zod';

export const userValidationSchema = z.object({
  body: z.object({
    name: z.string().min(1, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    password: z.string().min(6, {
      message: 'Password is required & should be at least 6 character',
    }),
    photo: z.string(),
    role: z
      .enum(['user', 'admin'], {
        message: "Role must be either 'user' or 'admin'",
      })
      .optional(),
  }),
});

export const updateUserValidationSchema = z.object({
  name: z.string().nonempty({ message: 'Name cannot be empty' }).optional(),
  email: z.string().email({ message: 'Invalid email address' }).optional(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 characters long' })
    .optional(),
 
  photo: z.string().optional(),
  role: z
    .enum(['user', 'admin'], {
      message: 'Role must be either user or admin',
    })
    .optional(),
});
