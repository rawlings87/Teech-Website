import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />);
    expect(
      screen.getByText('Digital Security & IT Excellence for Modern Organisations')
    ).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    render(<Hero />);
    expect(
      screen.getByText(/A Black-owned tech company/)
    ).toBeInTheDocument();
  });

  it('renders location information', () => {
    render(<Hero />);
    expect(
      screen.getByText(/Sugar Land, TX/)
    ).toBeInTheDocument();
  });

  it('renders CTA buttons', () => {
    render(<Hero />);

    expect(screen.getByText('Book a Consultation')).toBeInTheDocument();
    expect(screen.getByText('Get a Quote')).toBeInTheDocument();
  });

  it('CTA buttons link to contact page', () => {
    render(<Hero />);

    const consultationButton = screen.getByText('Book a Consultation').closest('a');
    const quoteButton = screen.getByText('Get a Quote').closest('a');

    expect(consultationButton).toHaveAttribute('href', '/contact');
    expect(quoteButton).toHaveAttribute('href', '/contact');
  });
});
