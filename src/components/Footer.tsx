import React from 'react';
import { InstagramIcon } from 'lucide-react';
import { Logo } from './Logo';
import { WhatsAppIcon } from './WhatsAppIcon';
import { contacts, trackWhatsAppContact } from '../utils/contacts';

export function Footer() {
  return (
    <footer className="w-full bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <Logo size="sm" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/45">
              Мужская одежда премиум-качества. Алматы и доставка по всему Казахстану и СНГ.
            </p>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-cream/35">Связаться</h3>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppContact}
                  className="inline-flex items-center gap-2.5 text-base text-cream/80 transition-colors duration-150 ease-premium hover:text-whatsapp">
                  
                  <WhatsAppIcon className="h-4 w-4 text-whatsapp" />
                  WhatsApp — {contacts.whatsappLabel}
                </a>
              </li>
              <li>
                <a
                  href={contacts.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base text-cream/80 transition-colors duration-150 ease-premium hover:text-instagram">
                  
                  <InstagramIcon className="h-4 w-4 text-instagram" aria-hidden="true" />
                  Instagram — {contacts.instagramHandle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.24em] text-cream/35">Шоурум</h3>
            <p className="mt-5 text-base leading-relaxed text-cream/80">{contacts.showroomAddress}</p>
            <p className="mt-2 text-sm text-cream/45">{contacts.workingHours}</p>
          </div>
        </div>

        <div className="mt-14 border-t border-cream/10 pt-6">
          <p className="text-xs text-cream/35">© {new Date().getFullYear()} Morenzo. Все права защищены.</p>
        </div>
      </div>
    </footer>);

}