import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonPrice from './ButtonPrice';

describe('ButtonPrice', () => {
  it('renders the button with the correct text content', () => {
    render(<ButtonPrice />);
    const buttonElement = screen.getByText(/Прайс-лист/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with the correct class name', () => {
    render(<ButtonPrice />);
    const buttonElement = screen.getByText(/Прайс-лист/i);
    expect(buttonElement).toHaveClass('button');
  });
});