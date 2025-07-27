import { describe, it, expect } from 'vitest';
import { request } from './request';
import { mockFetch } from '../utils/mockFetch';
import { mockUserResponse } from '../__mocks__/user.mock';

describe('request', () => {
  it('should return the user data correctly', async () => {
    mockFetch(mockUserResponse);

    const result = await request.getUser();
    expect(result).toEqual(mockUserResponse);
  });
});
