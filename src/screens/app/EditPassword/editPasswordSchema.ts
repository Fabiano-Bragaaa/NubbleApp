import {schemaTypes} from '@form';
import {z} from 'zod';

export const editPasswordSchema = z
  .object({
    currentPassword: z.string(),
    newPassword: schemaTypes.password,
    confirmPassword: schemaTypes.password,
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: 'As senhas não coincidem',
    path: ['confirmPassword'],
  });

export type EditPasswordSchema = z.infer<typeof editPasswordSchema>;
