import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from "./Header";

describe('Header component', () => {
  it('renders a supplied text correctly', () => {
    render(<Header text="Hello world!"/>);
    const h1Element = screen.getByText(/hello world/i);
    expect(h1Element).toBeInTheDocument();
  });
});
