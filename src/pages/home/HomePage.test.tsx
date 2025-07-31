import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { HomePage } from './HomePage';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../store';
import * as actionModule from '../../api/action';

const mockNavigate = vi.fn();
const mockDispatch = vi.fn();
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

vi.mock('../../api/action', () => ({
  actions: {
    getUser: vi.fn(),
  },
}));

vi.mock('../../store', async () => {
  const actual = await vi.importActual('../../store');
  return {
    ...actual,
    useAppDispatch: () => mockDispatch,
  };
});

vi.mock('../../components/Layout/Layout', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

const renderHomePage = () =>
  render(
    <Provider store={store}>
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>
    </Provider>,
  );

describe('HomePage', () => {
  it('should render the form correctly', () => {
    renderHomePage();
    expect(screen.getByText(/Seguro Salud Flexible/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Celular/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cotiza aquí/i })).toBeInTheDocument();
  });

  it('should show validation errors when empty inputs', async () => {
    const getUserMock = vi.spyOn(actionModule.actions, 'getUser').mockResolvedValueOnce();
    const user = userEvent.setup();
    renderHomePage();
    await user.click(screen.getByRole('button', { name: /Cotiza aquí/i }));

    expect(screen.getByText(/Debe ingresar un número de documento/i)).toBeInTheDocument();
    expect(screen.getByText(/Debe ingresar un número de celular/i)).toBeInTheDocument();
    expect(screen.getByText(/Debe aceptar la Política de Privacidad/i)).toBeInTheDocument();

    expect(getUserMock).not.toHaveBeenCalled();
  });

  it('should submit form correctly and redirect to /plans', async () => {
    const getUserMock = vi.spyOn(actionModule.actions, 'getUser').mockResolvedValueOnce();

    const user = userEvent.setup();
    renderHomePage();

    await user.type(screen.getByLabelText(/Celular/i), '987654321');
    await user.type(screen.getByLabelText(/Nro. de documento/i), '12345678');

    await user.click(screen.getByPlaceholderText(/Política de Privacidad/i));
    await user.click(screen.getByPlaceholderText(/Acepto la Política Comunicaciones Comerciales/i));

    await user.click(screen.getByRole('button', { name: /Cotiza aquí/i }));

    expect(getUserMock).toHaveBeenCalledWith(mockDispatch, {
      documentNumber: '12345678',
      documentType: 'DNI',
      phone: '987654321',
    });

    expect(mockNavigate).toHaveBeenCalledWith('/plans');
  });
});
