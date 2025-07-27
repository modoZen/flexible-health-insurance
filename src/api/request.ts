import type { UserResponse } from '../domain/user.interface';

const getUser = async (): Promise<UserResponse> => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
  const data = await response.json();
  return data;
};

export const request = {
  getUser,
};
