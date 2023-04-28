import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('contains an h1 header on the first page', () => {
    render(<App />);
    const h1Element = screen.getByText(/hello/i);
    expect(h1Element).toBeInTheDocument();
    expect(h1Element.tagName).toStrictEqual('H1');
  });
});
