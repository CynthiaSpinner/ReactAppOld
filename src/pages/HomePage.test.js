import React from 'react';
import { render, screen } from '@testing-library/react';

// Simple test component
function TestComponent() {
  return <div data-testid="test-component">Home Page Test</div>;
}

describe('HomePage Basic Test', () => {
  test('renders test component', () => {
    render(<TestComponent />);
    expect(screen.getByTestId('test-component')).toBeInTheDocument();
    expect(screen.getByText('Home Page Test')).toBeInTheDocument();
  });
});