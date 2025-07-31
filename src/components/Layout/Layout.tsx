import type { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface Props {
  hasHeader: boolean;
  hasFooter: boolean;
  children: ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children, hasFooter, hasHeader, title, description }: Props) => {
  console.log({ title });

  return (
    <div>
      <Helmet>
        {title && <title>{title}</title>}
        {description && <meta name='description' content={description} />}
      </Helmet>
      {hasHeader && <Header />}
      {children}
      {hasFooter && <Footer />}
    </div>
  );
};
