import React from 'react';

interface ActionButtonProps {
  href: string;
  variant?: 'primary' | 'whatsapp' | 'instagram' | 'ghost';
  size?: 'md' | 'lg';
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export function ActionButton({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  children,
  className = ''
}: ActionButtonProps) {
  const base =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-bold transition-colors duration-150 ease-premium';
  const sizing = size === 'lg' ? 'px-8 py-5 text-base sm:text-lg' : 'px-6 py-4 text-sm sm:text-base';
  const looks: Record<'primary' | 'whatsapp' | 'instagram' | 'ghost', string> = {
    primary: 'bg-gold text-ink hover:bg-gold-light',
    whatsapp: 'bg-whatsapp text-ink hover:bg-whatsapp-hover',
    instagram: 'bg-instagram text-white hover:bg-instagram-hover',
    ghost: 'border border-cream/25 text-cream/85 hover:border-cream/60 hover:text-cream'
  };
  const look = looks[variant];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${sizing} ${look} ${className}`}>
      
      {icon}
      <span>{children}</span>
    </a>);

}