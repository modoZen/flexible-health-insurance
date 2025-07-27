import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, vi, expect } from 'vitest';
import { Button } from './Button';

describe('Button component', () => {
  it('should render with mode "black" and children', () => {
    render(<Button mode='black'>Siguiente</Button>);
    const button = screen.getByRole('button', { name: /siguiente/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('button--black');
  });

  it('should render with mode "red" and children', () => {
    render(<Button mode='red'>Anterior</Button>);
    const button = screen.getByRole('button', { name: /anterior/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass('button--red');
  });

  it('should call handleClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(
      <Button mode='black' onClick={handleClick}>
        Enviar
      </Button>,
    );

    const button = screen.getByRole('button', { name: /enviar/i });

    await user.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should render button attributes', () => {
    render(
      <Button mode='black' type='submit'>
        Ingresar
      </Button>,
    );

    const button = screen.getByRole('button', { name: /ingresar/i });

    expect(button).toHaveAttribute('type', 'submit');
  });
});
