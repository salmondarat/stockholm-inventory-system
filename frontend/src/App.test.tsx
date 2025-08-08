import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Stockholm IMS heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Stockholm IMS/i);
  expect(headingElement).toBeInTheDocument();
});
