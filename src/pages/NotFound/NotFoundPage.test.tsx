import { render, screen } from '@testing-library/react';
import type { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { NotFoundPage } from './NotFoundPage';

const navigateMock = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => navigateMock,
  };
});

const renderWithRouter = (component: ReactNode) => render(<MemoryRouter>{component}</MemoryRouter>);

describe('NotFoundPage', () => {
  it('should render NotFound Page correctly', () => {
    renderWithRouter(<NotFoundPage />);

    const message = screen.getByText('Página no encontrada :c');

    expect(message).toBeInTheDocument();
  });

  it('should navigate to home when button is clicked', async () => {
    const user = userEvent.setup();
    renderWithRouter(<NotFoundPage />);
    const button = screen.getByRole('button');

    await user.click(button);

    expect(navigateMock).toHaveBeenCalledWith('/');
  });
});
