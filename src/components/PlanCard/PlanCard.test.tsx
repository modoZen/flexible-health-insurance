import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { PlanCard } from './PlanCard';
import userEvent from '@testing-library/user-event';

describe('PlanCard', () => {
  const mockClick = vi.fn();

  const props = {
    name: 'Plan de Clínica',
    price: 100,
    description: ['Incluye consultas', 'Cobertura nacional'],
    onClick: mockClick,
  };

  beforeEach(() => {
    render(<PlanCard {...props} />);
  });

  it('renders plan name, price and descriptions', () => {
    expect(screen.getByText(/Plan de Clínica/)).toBeInTheDocument();
    expect(screen.getByText(/\$100 al mes/)).toBeInTheDocument();
    expect(screen.getByText('Incluye consultas')).toBeInTheDocument();
    expect(screen.getByText('Cobertura nacional')).toBeInTheDocument();
  });

  it('calls onClick when clicking the button', async () => {
    const user = userEvent.setup();

    await user.click(screen.getByRole('button', { name: /Seleccionar Plan/i }));
    expect(mockClick).toHaveBeenCalled();
  });
});
