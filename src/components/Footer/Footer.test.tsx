import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';
import { describe, expect, it } from 'vitest';

describe('Footer component', () => {
  it('should render the logo and message', () => {
    render(<Footer />);

    const logo = screen.getByAltText('Logo Rimac Footer');
    const message = screen.getByText('© 2023 RIMAC Seguros y Reaseguros.');

    expect(logo).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
