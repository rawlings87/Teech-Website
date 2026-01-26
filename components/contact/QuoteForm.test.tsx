import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import QuoteForm from './QuoteForm';

describe('QuoteForm Component', () => {
  it('renders form heading', () => {
    render(<QuoteForm />);
    expect(screen.getByText('Get a Quote')).toBeInTheDocument();
  });

  it('renders all required form fields', () => {
    render(<QuoteForm />);

    expect(screen.getByLabelText(/Name/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Organisation/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Service of Interest/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Project Description/)).toBeInTheDocument();
    expect(screen.getByLabelText(/Preferred Start Date/)).toBeInTheDocument();
  });

  it('shows required field indicators', () => {
    render(<QuoteForm />);

    const nameLabel = screen.getByText(/Name/);
    const emailLabel = screen.getByText(/Email/);

    // Check if asterisk (*) is present for required fields
    expect(nameLabel.parentElement?.textContent).toContain('*');
    expect(emailLabel.parentElement?.textContent).toContain('*');
  });

  it('renders submit button', () => {
    render(<QuoteForm />);
    expect(screen.getByText('Submit Quote Request')).toBeInTheDocument();
  });

  it('shows placeholder note about form configuration', () => {
    render(<QuoteForm />);
    expect(
      screen.getByText(/Form posts to placeholder endpoint/)
    ).toBeInTheDocument();
  });

  it('renders all service options in dropdown', () => {
    render(<QuoteForm />);

    const select = screen.getByLabelText(/Service of Interest/);
    expect(select).toBeInTheDocument();

    // Check that select has the correct options (they're in the DOM)
    expect(screen.getByText('Consulting')).toBeInTheDocument();
    expect(screen.getByText('Database Engineering')).toBeInTheDocument();
    expect(screen.getByText('Training')).toBeInTheDocument();
    expect(screen.getByText('Recruitment')).toBeInTheDocument();
    expect(screen.getByText('Other')).toBeInTheDocument();
  });

  it('submits form when valid data is entered', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);

    // Fill in required fields
    await user.type(screen.getByLabelText(/Name/), 'John Doe');
    await user.type(screen.getByLabelText(/Email/), 'john@example.com');
    await user.selectOptions(screen.getByLabelText(/Service of Interest/), 'Consulting');
    await user.type(screen.getByLabelText(/Project Description/), 'Need help with database optimization');

    // Submit form
    const submitButton = screen.getByText('Submit Quote Request');
    await user.click(submitButton);

    // Wait for success message
    await waitFor(() => {
      expect(screen.getByText(/Thank you!/)).toBeInTheDocument();
    });
  });

  it('disables submit button while submitting', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);

    // Fill in required fields
    await user.type(screen.getByLabelText(/Name/), 'John Doe');
    await user.type(screen.getByLabelText(/Email/), 'john@example.com');
    await user.selectOptions(screen.getByLabelText(/Service of Interest/), 'Consulting');
    await user.type(screen.getByLabelText(/Project Description/), 'Test project');

    const submitButton = screen.getByText('Submit Quote Request');
    await user.click(submitButton);

    // Button should show "Submitting..." state
    expect(screen.getByText(/Submitting.../)).toBeInTheDocument();
  });

  it('validates required fields', async () => {
    const user = userEvent.setup();
    render(<QuoteForm />);

    const submitButton = screen.getByText('Submit Quote Request');

    // Try to submit without filling required fields
    await user.click(submitButton);

    // HTML5 validation should prevent submission
    const nameInput = screen.getByLabelText(/Name/);
    expect(nameInput).toBeRequired();
  });
});
