import type { User } from '../domain/user.interface';
import type { AppDispatch } from '../store';
import { setPlans } from '../store/slices/planSlice';
import { finishLoading, startLoading } from '../store/slices/uiSlice';
import { setUser } from '../store/slices/userSlice';
import { request } from './request';

const getUser = async (
  dispatch: AppDispatch,
  formData: Omit<User, 'name' | 'lastName' | 'birthDay'>,
) => {
  try {
    dispatch(startLoading());

    const userReponse = await request.getUser();

    const user = {
      ...userReponse,
      ...formData,
    };

    dispatch(setUser(user));
  } finally {
    dispatch(finishLoading());
  }
};

const getPlans = async (dispatch: AppDispatch) => {
  try {
    dispatch(startLoading());

    const plans = await request.getPlans();

    dispatch(setPlans(plans));
  } finally {
    dispatch(finishLoading());
  }
};

export const actions = {
  getUser,
  getPlans,
};
