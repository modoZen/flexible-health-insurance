import type { User } from '../domain/user.interface';
import type { AppDispatch } from '../store';
import { setPlans } from '../store/slices/planSlice';
import { setUser } from '../store/slices/userSlice';
import { request } from './request';

const getUser = async (
  dispatch: AppDispatch,
  formData: Omit<User, 'name' | 'lastName' | 'birthDay'>,
) => {
  try {
    // TODO loading true

    const userReponse = await request.getUser();

    const user = {
      ...userReponse,
      ...formData,
    };

    dispatch(setUser(user));
  } finally {
    // TODO loading false
  }
};

const getPlans = async (dispatch: AppDispatch) => {
  try {
    // TODO loading true

    const plans = await request.getPlans();

    dispatch(setPlans(plans));
  } finally {
    // TODO loading false
  }
};

export const actions = {
  getUser,
  getPlans,
};
