import { vi } from 'vitest';

export const mockFetch = (data: unknown, status = 200, ok = true): typeof vi.fn => {
  const fn = vi.fn().mockImplementation(() => {
    const response = {
      ok,
      status,
      json: () => Promise.resolve(data),
    };
    return Promise.resolve(response);
  });

  globalThis.fetch = fn;
  return fn;
};
