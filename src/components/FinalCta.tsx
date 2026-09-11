import React from 'react';
import { ActionButton } from './ActionButton';
import { WhatsAppIcon } from './WhatsAppIcon';
import { contacts } from '../utils/contacts';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-heading" className="w-full bg-forest-700 px-5 py-24 sm:px-8 sm:py-32 lg:px-16">
      <div className="mx-auto max-w-3xl text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-cream sm:text-5xl lg:text-6xl">
          
          Подберём образ <span className="text-gold-light">за один диалог</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cream/65 sm:text-lg">
          Напишите размер и что нужно — ответим в течение 10 минут, покажем варианты в наличии и поможем определиться.
        </p>
        <div className="mt-10 flex justify-center">
          <ActionButton
            href={contacts.whatsappUrl}
            variant="whatsapp"
            size="lg"
            icon={<WhatsAppIcon className="h-5 w-5" />}
            className="w-full sm:w-auto">
            
            Написать в WhatsApp
          </ActionButton>
        </div>
      </div>
    </section>);

}