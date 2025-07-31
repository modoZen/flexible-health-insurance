import { describe, expect, it, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import { Layout } from './Layout';

vi.mock('../Header/Header', () => ({
  Header: () => <div data-testid='mock-header'>Mock Header</div>,
}));

vi.mock('../Footer/Footer', () => ({
  Footer: () => <div data-testid='mock-footer'>Mock Footer</div>,
}));

interface Props {
  hasHeader?: boolean;
  hasFooter?: boolean;
  title?: string;
  description?: string;
}

const renderLayout = ({ hasHeader = false, hasFooter = false, title, description }: Props = {}) =>
  render(
    <HelmetProvider>
      <Layout hasHeader={hasHeader} hasFooter={hasFooter} title={title} description={description}>
        <p>Contenido principal</p>
      </Layout>
    </HelmetProvider>,
  );

describe('Layout', () => {
  it('should render children content', () => {
    renderLayout();
    expect(screen.getByText('Contenido principal')).toBeInTheDocument();
  });

  it('should render the Header when hasHeader is true', () => {
    renderLayout({ hasHeader: true });
    expect(screen.getByTestId('mock-header')).toBeInTheDocument();
  });

  it('should not render the Header when hasHeader is false', () => {
    renderLayout();
    expect(screen.queryByTestId('mock-header')).not.toBeInTheDocument();
  });

  it('should render the Footer when hasFooter is true', () => {
    renderLayout({ hasFooter: true });
    expect(screen.getByTestId('mock-footer')).toBeInTheDocument();
  });

  it('should not render the Footer when hasFooter is false', () => {
    renderLayout();
    expect(screen.queryByTestId('mock-footer')).not.toBeInTheDocument();
  });

  it('should set the document title and meta description when provided', async () => {
    renderLayout({ title: 'Título de prueba', description: 'Descripción de prueba' });

    await waitFor(() => {
      expect(document.title).toBe('Título de prueba');

      const meta = document.querySelector("meta[name='description']");
      expect(meta?.getAttribute('content')).toBe('Descripción de prueba');
    });
  });
});
