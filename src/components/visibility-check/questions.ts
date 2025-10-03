import { Question } from './types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'Wie präsent ist Ihr Unternehmen als Arbeitgeber auf Social Media?',
    options: [
      { label: 'Sehr präsent (regelmäßige Posts, aktive Community)', value: 3 },
      { label: 'Teilweise präsent (gelegentliche Posts)', value: 2 },
      { label: 'Kaum präsent (vereinzelte Beiträge)', value: 1 },
      { label: 'Gar nicht präsent', value: 0 },
    ],
  },
  {
    id: 'q2',
    text: 'Wie würden Sie Ihre Karriereseite bewerten?',
    options: [
      { label: 'Modern, ansprechend und informativ', value: 3 },
      { label: 'Vorhanden, aber ausbaufähig', value: 2 },
      { label: 'Veraltet oder wenig informativ', value: 1 },
      { label: 'Keine dedizierte Karriereseite vorhanden', value: 0 },
    ],
  },
  {
    id: 'q3',
    text: 'Wie gut sind Ihre Bewertungen auf Arbeitgeber-Bewertungsplattformen?',
    options: [
      { label: 'Sehr gut (4+ Sterne)', value: 3 },
      { label: 'Gut (3-4 Sterne)', value: 2 },
      { label: 'Verbesserungswürdig (unter 3 Sterne)', value: 1 },
      { label: 'Keine Bewertungen vorhanden', value: 0 },
    ],
  },
  {
    id: 'q4',
    text: 'Wie aktiv nutzen Sie Employer Branding Maßnahmen?',
    options: [
      { label: 'Sehr aktiv (gezielte Kampagnen, Events)', value: 3 },
      { label: 'Teilweise aktiv (gelegentliche Maßnahmen)', value: 2 },
      { label: 'Kaum aktiv (nur sporadisch)', value: 1 },
      { label: 'Gar nicht aktiv', value: 0 },
    ],
  },
  {
    id: 'q5',
    text: 'Wie schnell reagieren Sie auf Bewerbungen?',
    options: [
      { label: 'Innerhalb von 48 Stunden', value: 3 },
      { label: 'Innerhalb einer Woche', value: 2 },
      { label: 'Länger als eine Woche', value: 1 },
      { label: 'Unregelmäßig oder gar nicht', value: 0 },
    ],
  },
];
