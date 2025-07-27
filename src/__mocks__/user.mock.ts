import { DocumentTypeEnum } from '../domain/document-type.enum';
import type { User, UserResponse } from '../domain/user.interface';

export const mockUserResponse: UserResponse = {
  name: 'Rocío',
  lastName: 'Miranda Díaz',
  birthDay: '02-04-1990',
};

export const mockUserFormData = {
  documentType: DocumentTypeEnum.DNI,
  documentNumber: '11223344',
  phone: '987654321',
};

export const mockUser: User = {
  ...mockUserResponse,
  ...mockUserFormData,
};
