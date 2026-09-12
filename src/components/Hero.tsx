import React from 'react';
import { motion } from 'framer-motion';
import { InstagramIcon, MapPinIcon } from 'lucide-react';
import { Logo } from './Logo';
import { ActionButton } from './ActionButton';
import { WhatsAppIcon } from './WhatsAppIcon';
import { contacts, trackWhatsAppContact } from '../utils/contacts';

const ease = [0.23, 1, 0.32, 1] as const;

export function Hero() {
  return (
    <header className="relative w-full overflow-hidden bg-forest-900 px-5 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-12 lg:px-16 lg:pb-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Logo />
          <span className="hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-cream/45 sm:flex">
            <MapPinIcon className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {contacts.city}
          </span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease }}
          className="mt-20 max-w-3xl sm:mt-28 lg:mt-36">
          
          <h1 className="text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.03em] text-cream sm:text-6xl lg:text-[5.25rem]">
            Стиль, который
            <br />
            говорит <span className="text-gold">за тебя</span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/60 sm:mt-9 sm:text-xl">
            Мужская одежда премиум-качества в Алматы и по всему Казахстану.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:mt-12 sm:flex-row sm:items-center sm:gap-4">
            <ActionButton
              href={contacts.whatsappUrl}
              variant="whatsapp"
              size="lg"
              icon={<WhatsAppIcon className="h-5 w-5" />}
              onClick={trackWhatsAppContact}>
              
              Написать в WhatsApp
            </ActionButton>
            <ActionButton
              href={contacts.instagramUrl}
              variant="instagram"
              size="lg"
              icon={<InstagramIcon className="h-5 w-5" aria-hidden="true" />}>
              
              Смотреть в Instagram
            </ActionButton>
          </div>

          <p className="mt-8 text-sm text-cream/40">
            Отвечаем в мессенджере в течение 10 минут — с 10:00 до 21:00.
          </p>
        </motion.div>
      </div>
    </header>);

}