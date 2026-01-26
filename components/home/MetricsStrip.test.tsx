import { render, screen } from '@testing-library/react';
import MetricsStrip from './MetricsStrip';

describe('MetricsStrip Component', () => {
  it('renders all three metrics', () => {
    render(<MetricsStrip />);

    expect(screen.getByText('72h')).toBeInTheDocument();
    expect(screen.getByText('99.9%')).toBeInTheDocument();
    expect(screen.getByText('Zero Noise')).toBeInTheDocument();
  });

  it('renders metric labels', () => {
    render(<MetricsStrip />);

    expect(screen.getByText('Rapid assessment & action plan')).toBeInTheDocument();
    expect(screen.getByText('Reliability mindset (SRE-inspired)')).toBeInTheDocument();
    expect(screen.getByText('Only measurable work')).toBeInTheDocument();
  });

  it('displays metrics in correct structure', () => {
    render(<MetricsStrip />);

    const metric72h = screen.getByText('72h');
    expect(metric72h.closest('div')).toHaveClass('text-center');
  });
});
