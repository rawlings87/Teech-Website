import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card Component', () => {
  it('renders children content', () => {
    render(
      <Card>
        <p>Card content</p>
      </Card>
    );
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('applies base styles', () => {
    render(<Card>Content</Card>);
    const card = screen.getByText('Content').parentElement;
    expect(card).toHaveClass('bg-steel', 'rounded-lg', 'p-6');
  });

  it('applies hover styles when hover prop is true', () => {
    render(<Card hover>Hoverable</Card>);
    const card = screen.getByText('Hoverable').parentElement;
    expect(card).toHaveClass('hover:bg-slate', 'cursor-pointer');
  });

  it('does not apply hover styles by default', () => {
    render(<Card>No hover</Card>);
    const card = screen.getByText('No hover').parentElement;
    expect(card).not.toHaveClass('cursor-pointer');
  });

  it('applies custom className', () => {
    render(<Card className="custom-card">Custom</Card>);
    const card = screen.getByText('Custom').parentElement;
    expect(card).toHaveClass('custom-card');
  });
});
