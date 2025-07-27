import type { DocumentTypeEnum } from './document-type.enum';

export interface User {
  name: string;
  lastName: string;
  birthDay: string;
  documentType: DocumentTypeEnum;
  documentNumber: string;
  phone: string;
}

export interface UserResponse {
  name: string;
  lastName: string;
  birthDay: string;
}
