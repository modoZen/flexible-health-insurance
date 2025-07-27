import type { Plan, PlansResponse } from '../domain/plan.interface';
import type { UserResponse } from '../domain/user.interface';

const getUser = async (): Promise<UserResponse> => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/user.json');
  const data = await response.json();
  return data;
};

const getPlans = async (): Promise<Plan[]> => {
  const response = await fetch('https://rimac-front-end-challenge.netlify.app/api/plans.json');
  const data: PlansResponse = await response.json();
  return data.list;
};

export const request = {
  getUser,
  getPlans,
};
