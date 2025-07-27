import { render, screen } from '@testing-library/react';
import { SummaryCard } from './SummaryCard';
import { beforeEach, describe, expect, it } from 'vitest';
import { mockUser } from '../../__mocks__/user.mock';
import { mockPlans } from '../../__mocks__/plan.mock';

beforeEach(() => {
  render(<SummaryCard {...mockUser} plan={mockPlans[0]} />);
});

describe('SummaryCard', () => {
  it('should render full name', () => {
    expect(screen.getByText(`${mockUser.name} ${mockUser.lastName}`)).toBeInTheDocument();
  });

  it('should show document information', () => {
    expect(
      screen.getByText(`${mockUser.documentType}: ${mockUser.documentNumber}`),
    ).toBeInTheDocument();
  });
});
