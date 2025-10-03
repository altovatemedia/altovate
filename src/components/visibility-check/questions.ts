import { Question } from './types';

export const questions: Question[] = [
  {
    id: 'google_business',
    text: 'Hast du ein Google Business Profil (Unternehmenseintrag)?',
    type: 'radio',
    options: [
      { label: 'Ja', value: 'yes', points: 1 },
      { label: 'Nein', value: 'no', points: 0 },
      { label: 'Weiß nicht', value: 'unknown', points: 0 },
    ],
    showSubQuestionsIf: 'yes',
    subQuestions: [
      { id: 'gb_opening_hours', text: 'Öffnungszeiten & Kontaktdaten korrekt', points: 1 },
      { id: 'gb_reviews', text: 'Mindestens 5 Bewertungen', points: 1 },
      { id: 'gb_review_responses', text: 'Bewertungen beantwortet', points: 1 },
      { id: 'gb_photos', text: 'Aktuelle Fotos hochgeladen', points: 1 },
      { id: 'gb_none', text: 'Nichts davon trifft zu', points: 0 },
    ],
  },
  {
    id: 'website',
    text: 'Hast du eine Website?',
    type: 'radio',
    options: [
      { label: 'Ja', value: 'yes', points: 1 },
      { label: 'Nein', value: 'no', points: 0 },
    ],
    showSubQuestionsIf: 'yes',
    subQuestions: [
      { id: 'web_mobile', text: 'Mobile optimiert / responsive', points: 1 },
      { id: 'web_contact', text: 'Sichtbare Kontaktmöglichkeiten (Telefon, Mail, Formular, WhatsApp)', points: 1 },
      { id: 'web_speed', text: 'Ladezeit unter 3 Sekunden', points: 1 },
      { id: 'web_cta', text: 'Klare Call-to-Actions (z. B. Termin, Anfrage)', points: 1 },
      { id: 'web_legal', text: 'Rechtliches vollständig (Impressum/DSGVO)', points: 1 },
      { id: 'web_none', text: 'Nichts davon trifft zu', points: 0 },
    ],
  },
  {
    id: 'social_media',
    text: 'Nutzt du mindestens einen Social Media Kanal geschäftlich?',
    type: 'radio',
    options: [
      { label: 'Ja', value: 'yes', points: 1 },
      { label: 'Nein', value: 'no', points: 0 },
    ],
    showSubQuestionsIf: 'yes',
    subQuestions: [
      { id: 'sm_profile', text: 'Profil vollständig (Beschreibung, Kontakt, Link)', points: 1 },
      { id: 'sm_active', text: 'Aktiv in den letzten 30 Tagen', points: 1 },
      { id: 'sm_branding', text: 'Einheitliches Branding (Logo, Farben, Bildsprache)', points: 1 },
      { id: 'sm_highlights', text: 'Highlights / angepinnte Beiträge für Kerninfos', points: 1 },
      { id: 'sm_none', text: 'Nichts davon trifft zu', points: 0 },
    ],
  },
  {
    id: 'advertising',
    text: 'Welche Werbemaßnahmen nutzt du aktuell? (Mehrfachauswahl)',
    type: 'checkbox',
    options: [
      { label: 'Print / Anzeigen', value: 'print', points: 1 },
      { label: 'Sponsoring / Partnerschaften', value: 'sponsoring', points: 1 },
      { label: 'Performance Ads (Meta, Google, LinkedIn)', value: 'performance_ads', points: 2 },
      { label: 'Content Marketing (Blog, Newsletter, Videos)', value: 'content', points: 1 },
    ],
  },
];
