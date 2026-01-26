import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = false }: CardProps) {
  const hoverStyles = hover
    ? 'hover:bg-slate hover:scale-[1.02] cursor-pointer'
    : '';

  return (
    <div
      className={`bg-steel rounded-lg p-6 border border-slate transition-all duration-300 ${hoverStyles} ${className}`}
    >
      {children}
    </div>
  );
}
