import { render, screen } from '@testing-library/react';
import ServicesGrid from './ServicesGrid';

describe('ServicesGrid Component', () => {
  it('renders section heading', () => {
    render(<ServicesGrid />);
    expect(screen.getByText('What We Do')).toBeInTheDocument();
  });

  it('renders all four service cards', () => {
    render(<ServicesGrid />);

    expect(screen.getByText('IT Consulting & Optimisation')).toBeInTheDocument();
    expect(screen.getByText('Database & Platform Engineering')).toBeInTheDocument();
    expect(screen.getByText('IT Training & Career Enablement')).toBeInTheDocument();
    expect(screen.getByText('Recruitment & Global Delivery')).toBeInTheDocument();
  });

  it('renders service descriptions', () => {
    render(<ServicesGrid />);

    expect(
      screen.getByText(/Streamline your technology stack/)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Performance tuning, migrations/)
    ).toBeInTheDocument();
  });

  it('all service cards have learn more links', () => {
    render(<ServicesGrid />);

    const learnMoreLinks = screen.getAllByText('Learn more');
    expect(learnMoreLinks).toHaveLength(4);
  });
});
