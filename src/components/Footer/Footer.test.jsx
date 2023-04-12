import { render } from '@testing-library/react';
import Footer from './Footer';

test('renders footer text', () => {
  const { getByText } = render(<Footer />);
  const footerElement = getByText(/Footer/i);
  expect(footerElement).toBeInTheDocument();
});