import { render, screen } from '@testing-library/react';
import TelemetryFeed from './TelemetryFeed';

describe('TelemetryFeed Component', () => {
  it('renders section heading', () => {
    render(<TelemetryFeed />);
    expect(screen.getByText('Live Operations View')).toBeInTheDocument();
  });

  it('renders subheading with simulated notice', () => {
    render(<TelemetryFeed />);
    expect(
      screen.getByText(/Simulated telemetry/)
    ).toBeInTheDocument();
  });

  it('renders telemetry events', () => {
    render(<TelemetryFeed />);

    expect(
      screen.getAllByText(/THREAT INTEL/).length
    ).toBeGreaterThan(0);

    expect(
      screen.getAllByText(/MFA CHALLENGE/).length
    ).toBeGreaterThan(0);
  });

  it('displays SQL latency event', () => {
    render(<TelemetryFeed />);

    const sqlEvents = screen.getAllByText(/SQL LATENCY/);
    expect(sqlEvents.length).toBeGreaterThan(0);
  });

  it('displays training cohort event', () => {
    render(<TelemetryFeed />);

    const trainingEvents = screen.getAllByText(/TRAINING COHORT/);
    expect(trainingEvents.length).toBeGreaterThan(0);
  });
});
