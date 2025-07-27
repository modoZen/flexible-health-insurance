import { describe, it, expect, vi } from 'vitest';
import { request } from './request';
import { mockUser, mockUserFormData, mockUserResponse } from '../__mocks__/user.mock';
import { actions } from './action';
import { setUser } from '../store/slices/userSlice';

describe('action', () => {
  it('should call getUser of request and distpach setUser', async () => {
    vi.spyOn(request, 'getUser').mockResolvedValueOnce(mockUserResponse);

    const distpach = vi.fn();

    await actions.getUser(distpach, mockUserFormData);

    expect(request.getUser).toHaveBeenCalled();
    expect(distpach).toHaveBeenCalledWith(setUser(mockUser));
  });
});
