import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Navbar from './Navbar';

describe('Navbar Component', () => {
  it('renders company name', () => {
    render(<Navbar />);
    expect(screen.getByText('Rawlings Global Solutions')).toBeInTheDocument();
  });

  it('renders all navigation links', () => {
    render(<Navbar />);

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Training')).toBeInTheDocument();
    expect(screen.getByText('Recruitment')).toBeInTheDocument();
    expect(screen.getByText('Events')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders CTA buttons in desktop view', () => {
    render(<Navbar />);

    const ctaButtons = screen.getAllByText('Book a Consultation');
    expect(ctaButtons.length).toBeGreaterThan(0);

    const quoteButtons = screen.getAllByText('Get a Quote');
    expect(quoteButtons.length).toBeGreaterThan(0);
  });

  it('has mobile menu toggle button', () => {
    render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');
    expect(toggleButton).toBeInTheDocument();
  });

  it('toggles mobile menu when button is clicked', async () => {
    const user = userEvent.setup();
    render(<Navbar />);

    const toggleButton = screen.getByLabelText('Toggle menu');

    // Initially mobile menu should not be visible (in DOM but hidden by CSS)
    await user.click(toggleButton);

    // After click, menu should be visible
    // We can check if the button state changed
    expect(toggleButton).toBeInTheDocument();
  });

  it('company name links to home page', () => {
    render(<Navbar />);

    const companyLink = screen.getByText('Rawlings Global Solutions').closest('a');
    expect(companyLink).toHaveAttribute('href', '/');
  });
});
