import { render, screen } from '@testing-library/react';
import CTABlock from './CTABlock';

describe('CTABlock Component', () => {
  it('renders heading', () => {
    render(<CTABlock />);
    expect(screen.getByText('Start with a Rapid Assessment')).toBeInTheDocument();
  });

  it('renders description with key process steps', () => {
    render(<CTABlock />);
    expect(
      screen.getByText(/72-hour discovery/)
    ).toBeInTheDocument();
  });

  it('renders CTA button', () => {
    render(<CTABlock />);
    expect(screen.getByText('Book a Consultation')).toBeInTheDocument();
  });

  it('CTA button links to contact page', () => {
    render(<CTABlock />);
    const button = screen.getByText('Book a Consultation').closest('a');
    expect(button).toHaveAttribute('href', '/contact');
  });
});
