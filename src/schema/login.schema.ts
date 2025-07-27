import * as yup from 'yup';
import type { DocumentTypeEnum } from '../domain/document-type.enum';

export const loginSchema = yup.object({
  documentType: yup.mixed<DocumentTypeEnum>(),
  documentNumber: yup
    .string()
    .matches(/^\d{8}$/, 'Debe un número de documento válido')
    .required('Debe ingresar un número de documento'),
  phone: yup
    .string()
    .required('Debe ingresar un número de celular')
    .matches(/^\d{9}$/, 'Debe ingresar un número de celular válido'),
  privacyPolicy: yup.boolean().oneOf([true], 'Debe aceptar la Política de Privacidad'),
  commercialPolicy: yup.boolean(),
});
