import {schemaTypes} from '@form';
import {z} from 'zod';

export const editProfileSchema = z.object({
  username: schemaTypes.username,
  firstName: schemaTypes.name,
  lastName: schemaTypes.name,
  email: schemaTypes.email,
  password: schemaTypes.password,
});

export type typeEditProfileSchema = z.infer<typeof editProfileSchema>;
