import { describe, it, expect } from 'vitest';
import { request } from './request';
import { mockFetch } from '../utils/mockFetch';
import { mockUserResponse } from '../__mocks__/user.mock';
import { mockPlanResponse, mockPlans } from '../__mocks__/plan.mock';

describe('request', () => {
  it('should return the user data correctly', async () => {
    mockFetch(mockUserResponse);

    const result = await request.getUser();

    expect(result).toEqual(mockUserResponse);
  });

  it('should return the plans data correctly', async () => {
    mockFetch(mockPlanResponse);

    const result = await request.getPlans();

    expect(result).toEqual(mockPlans);
  });
});
