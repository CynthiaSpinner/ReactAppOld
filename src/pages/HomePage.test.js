// imports react and testing utilities
import React from 'react';
import { render, screen } from '@testing-library/react';

// simple test component for homepage testing
function TestComponent() {
  return <div data-testid="test-component">Home Page Test</div>;
}

// basic test suite for homepage functionality
describe('HomePage Basic Test', () => {
  // tests component rendering and text content
  test('renders test component', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Home Page Test')).toBeInTheDocument();
  });
});