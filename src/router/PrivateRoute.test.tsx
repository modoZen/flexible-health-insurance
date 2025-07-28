import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { describe, expect, it } from 'vitest';

describe('PrivateRoute', () => {
  it('should redirect to / when user is unauthenticated', () => {
    render(
      <MemoryRouter initialEntries={['/plans']}>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route element={<PrivateRoute isAuthenticated={false} />}>
            <Route path='/plans' element={<h1>Plans Page</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Home/i)).toBeInTheDocument();
  });

  it('should render the private route when user is authenticated', () => {
    render(
      <MemoryRouter initialEntries={['/plans']}>
        <Routes>
          <Route path='/' element={<h1>Home</h1>} />
          <Route element={<PrivateRoute isAuthenticated={true} />}>
            <Route path='/plans' element={<h1>Plans Page</h1>} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Plans Page/i)).toBeInTheDocument();
  });
});
