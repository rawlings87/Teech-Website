import { render, screen } from '@testing-library/react';
import PageHero from './PageHero';

describe('PageHero Component', () => {
  it('renders headline and subheading', () => {
    render(
      <PageHero
        headline="Test Headline"
        subheading="Test subheading text"
      />
    );

    expect(screen.getByText('Test Headline')).toBeInTheDocument();
    expect(screen.getByText('Test subheading text')).toBeInTheDocument();
  });

  it('renders headline in h1 tag', () => {
    render(
      <PageHero
        headline="Main Title"
        subheading="Subtitle"
      />
    );

    const headline = screen.getByText('Main Title');
    expect(headline.tagName).toBe('H1');
  });

  it('applies correct styling classes', () => {
    render(
      <PageHero
        headline="Styled Hero"
        subheading="With styles"
      />
    );

    const section = screen.getByText('Styled Hero').closest('section');
    expect(section).toHaveClass('bg-gradient-hero');
  });
});
