import type { ReactNode } from 'react';
import './GridContainer.scss';

interface Props {
  children: ReactNode;
}

export const GridContainer = ({ children }: Props) => {
  return <div className='grid-container'>{children}</div>;
};
