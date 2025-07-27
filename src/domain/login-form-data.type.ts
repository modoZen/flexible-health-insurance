import * as yup from 'yup';
import type { loginSchema } from '../schema/login.schema';

export type LoginFormData = yup.InferType<typeof loginSchema>;
