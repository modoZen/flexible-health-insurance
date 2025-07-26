import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { GridContainer } from './GridContainer';

describe('GridContainer', () => {
  it('should render children', () => {
    render(
      <GridContainer>
        <div>test</div>
      </GridContainer>,
    );

    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
