export function trackWhatsAppContact() {
  window.fbq?.('track', 'Contact');
}

export const contacts = {
  whatsappUrl: 'https://wa.me/77770693798',
  whatsappLabel: '+7 777 069 3798',
  instagramUrl: 'https://www.instagram.com/morenzo.official.kz/',
  instagramHandle: '@morenzo.official.kz',
  showroomAddress: 'Алматы, Торговый дом «Арбат», ул. Наурызбай батыра 50, бутик 31/32',
  workingHours: 'Ежедневно 10:00 — 21:00',
  city: 'Алматы, Казахстан'
} as const;