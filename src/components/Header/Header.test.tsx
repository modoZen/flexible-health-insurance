import { render, screen } from '@testing-library/react';
import { Header } from './Header';
import { describe, expect, it } from 'vitest';

describe('Header component', () => {
  it('should render the logo, phone icon and phone number', () => {
    render(<Header />);

    const logo = screen.getByAltText('Rimac logo');
    const phoneIcon = screen.getByAltText('Phone icon');
    const phoneNumber = screen.getByText('(01) 411 6001');

    expect(logo).toBeInTheDocument();
    expect(phoneNumber).toBeInTheDocument();
    expect(phoneIcon).toBeInTheDocument();
  });
});
