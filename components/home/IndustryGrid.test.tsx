import { render, screen } from '@testing-library/react';
import IndustryGrid from './IndustryGrid';

describe('IndustryGrid Component', () => {
  it('renders section heading', () => {
    render(<IndustryGrid />);
    expect(screen.getByText('Industries We Serve')).toBeInTheDocument();
  });

  it('renders all six industries', () => {
    render(<IndustryGrid />);

    expect(screen.getByText('Banking & Finance')).toBeInTheDocument();
    expect(screen.getByText('Insurance')).toBeInTheDocument();
    expect(screen.getByText('Oil & Gas')).toBeInTheDocument();
    expect(screen.getByText('Manufacturing')).toBeInTheDocument();
    expect(screen.getByText('Telecommunications')).toBeInTheDocument();
    expect(screen.getByText('Public Sector')).toBeInTheDocument();
  });

  it('renders subheading about regulated sectors', () => {
    render(<IndustryGrid />);
    expect(
      screen.getByText(/Risk-aware architecture/)
    ).toBeInTheDocument();
  });
});
