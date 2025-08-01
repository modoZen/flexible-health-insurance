import { describe, it, expect, vi } from 'vitest';
import { request } from '../../api/request';
import { actions } from './action';
import { setUser } from '../slices/userSlice';
import { setPlans } from '../slices/planSlice';
import { mockPlans } from '../../__mocks__/plan.mock';
import { mockUser, mockUserFormData, mockUserResponse } from '../../__mocks__/user.mock';

describe('action', () => {
  it('should call getUser of request and distpach setUser', async () => {
    vi.spyOn(request, 'getUser').mockResolvedValueOnce(mockUserResponse);

    const distpach = vi.fn();

    await actions.getUser(distpach, mockUserFormData);

    expect(request.getUser).toHaveBeenCalled();
    expect(distpach).toHaveBeenCalledWith(setUser(mockUser));
  });

  it('should call getPlans of request and dispatch setPlans', async () => {
    vi.spyOn(request, 'getPlans').mockResolvedValueOnce(mockPlans);

    const dispatch = vi.fn();

    await actions.getPlans(dispatch);

    expect(request.getPlans).toHaveBeenCalled();
    expect(dispatch).toHaveBeenCalledWith(setPlans(mockPlans));
  });
});
