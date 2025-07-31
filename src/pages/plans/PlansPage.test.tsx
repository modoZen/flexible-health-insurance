import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from '../../store';
import { PlansPage } from './PlansPage';
import { setUser } from '../../store/slices/userSlice';
import { setPlans } from '../../store/slices/planSlice';
import { mockUser } from '../../__mocks__/user.mock';
import { mockPlans } from '../../__mocks__/plan.mock';
import { actions } from '../../api/action';

vi.mock('../../components/Layout/Layout', () => ({
  Layout: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}));

describe('PlansPage', () => {
  beforeEach(() => {
    store.dispatch(setUser(mockUser));
    store.dispatch(setPlans(mockPlans));
  });

  const renderPlansPage = () =>
    render(
      <Provider store={store}>
        <MemoryRouter>
          <PlansPage />
        </MemoryRouter>
      </Provider>,
    );

  it('should show user name and step indicator', () => {
    renderPlansPage();
    expect(screen.getByText(/Paso 1 de 2/i)).toBeInTheDocument();
    expect(screen.getByText(/¿Para quién deseas cotizar?/i)).toBeInTheDocument();
  });

  it('should show plans after selecting a person', async () => {
    vi.spyOn(actions, 'getPlans').mockResolvedValueOnce();
    const user = userEvent.setup();
    renderPlansPage();
    const meCard = screen.getByText(/Para mí/i);
    await user.click(meCard);

    expect(screen.getByText(mockPlans[0].name)).toBeInTheDocument();
  });

  it('should go to step 2 after selecting a plan', async () => {
    vi.spyOn(actions, 'getPlans').mockResolvedValueOnce();
    const user = userEvent.setup();
    renderPlansPage();
    const meCard = screen.getByText(/Para mí/i);
    await user.click(meCard);

    const [button] = screen.getAllByRole('button', { name: /Seleccionar Plan/i });
    await user.click(button);

    expect(screen.getByText(/Resumen del seguro/i)).toBeInTheDocument();
    expect(screen.getByText(`${mockUser.name} ${mockUser.lastName}`)).toBeInTheDocument();
  });
});
