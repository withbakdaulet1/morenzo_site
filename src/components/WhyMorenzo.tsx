import React from 'react';
import { motion } from 'framer-motion';
import { advantages } from '../data/advantages';

const ease = [0.23, 1, 0.32, 1] as const;

export function WhyMorenzo() {
  return (
    <section aria-labelledby="why-heading" className="w-full bg-ink px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="why-heading"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.28, ease }}
          className="max-w-lg text-3xl font-extrabold leading-tight tracking-[-0.02em] text-cream sm:text-5xl">
          
          Почему Morenzo
        </motion.h2>

        <div className="mt-12 grid gap-px bg-cream/10 sm:mt-16 sm:grid-cols-2">
          {advantages.map(({ icon: Icon, title, text }) =>
          <div key={title} className="flex flex-col bg-ink px-0 py-8 sm:px-8 sm:py-10">
              <Icon className="h-6 w-6 text-gold" aria-hidden="true" strokeWidth={1.5} />
              <h3 className="mt-6 text-xl font-bold leading-snug text-cream sm:text-2xl">{title}</h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-cream/55">{text}</p>
            </div>
          )}
        </div>
      </div>
    </section>);

}