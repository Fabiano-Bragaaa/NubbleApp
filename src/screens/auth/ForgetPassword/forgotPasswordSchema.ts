import {z} from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.string().email('email inválido'),
});

export type typeforgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
