// imports react and testing utilities
import React from 'react';
import { render, screen } from '@testing-library/react';

// simple test component for basic rendering tests
function TestComponent() {
  return <div data-testid="test-component">Hello World</div>;
}

// basic jest test suite for app functionality
describe('Basic Jest Test', () => {
  // tests component rendering and text content
  test('renders test component', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  // tests basic mathematical operations
  test('basic math works', () => {
    expect(2 + 2).toBe(4);
  });
});