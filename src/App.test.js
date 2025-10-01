import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple test component
function TestComponent() {
  return <div data-testid="test-component">Hello World</div>;
}

describe('Basic Jest Test', () => {
  test('renders test component', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  test('basic math works', () => {
    expect(2 + 2).toBe(4);
  });
});