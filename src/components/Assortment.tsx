import React from 'react';
import { InstagramIcon } from 'lucide-react';
import { ActionButton } from './ActionButton';
import { WhatsAppIcon } from './WhatsAppIcon';
import { contacts } from '../utils/contacts';

export function Assortment() {
  return (
    <section aria-labelledby="assortment-heading" className="w-full bg-ink px-5 py-20 sm:px-8 sm:py-28 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <span className="text-xs uppercase tracking-[0.28em] text-gold">Актуальный ассортимент</span>
          <h2
            id="assortment-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-[-0.02em] text-cream sm:text-5xl">
            
            Коллекция меняется каждую неделю
          </h2>
        </div>

        <div>
          <p className="text-base leading-relaxed text-cream/60 sm:text-lg">
            Новые модели и размеры приходят постоянно, поэтому мы не держим витрину с ценами на сайте — она бы
            устаревала за пару дней. Весь живой каталог, наличие размеров и точные цены — в Instagram и WhatsApp.
            Напишите, что искали, и мы скинем то, что есть прямо сейчас.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <ActionButton
              href={contacts.whatsappUrl}
              variant="whatsapp"
              icon={<WhatsAppIcon className="h-5 w-5" />}>
              
              Спросить в WhatsApp
            </ActionButton>
            <ActionButton
              href={contacts.instagramUrl}
              variant="instagram"
              icon={<InstagramIcon className="h-5 w-5" aria-hidden="true" />}>
              
              Каталог в Instagram
            </ActionButton>
          </div>
        </div>
      </div>
    </section>);

}