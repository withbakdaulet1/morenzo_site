import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md';
}

export function Logo({ size = 'md' }: LogoProps) {
  const isSm = size === 'sm';
  return (
    <span
      className={`inline-flex items-center bg-forest-700 text-gold-light font-extrabold uppercase leading-none ${
      isSm ? 'px-3 py-2 text-sm tracking-[0.28em]' : 'px-4 py-3 text-base tracking-[0.34em] sm:text-lg'}`
      }>
      
      Morenzo
    </span>);

}