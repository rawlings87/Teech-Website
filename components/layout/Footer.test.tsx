import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders company name', () => {
    render(<Footer />);
    expect(screen.getByText('Rawlings Global Solutions')).toBeInTheDocument();
  });

  it('renders status line', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Operational Status: Online/)
    ).toBeInTheDocument();
  });

  it('renders copyright text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2026 Rawlings Global Solutions/)
    ).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Footer />);

    // Check for main navigation links
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Training')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    render(<Footer />);

    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
    expect(screen.getByText('Security')).toBeInTheDocument();
  });

  it('renders company description', () => {
    render(<Footer />);
    expect(
      screen.getByText(/A Black-owned tech company/)
    ).toBeInTheDocument();
  });

  it('renders location information', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Sugar Land, TX/)
    ).toBeInTheDocument();
  });
});
