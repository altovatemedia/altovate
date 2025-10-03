import { Answer, VisibilityCheckResult } from './types';

export const calculateScore = (answers: Answer[]): VisibilityCheckResult => {
  const totalScore = answers.reduce((sum, answer) => sum + answer.value, 0);
  const maxScore = answers.length * 3; // Maximum 3 points per question
  const percentage = Math.round((totalScore / maxScore) * 100);

  let level: 'low' | 'medium' | 'high';
  let message: string;

  if (percentage >= 75) {
    level = 'high';
    message = 'Hervorragend! Sie sind bereits sehr gut als Arbeitgeber sichtbar.';
  } else if (percentage >= 50) {
    level = 'medium';
    message = 'Guter Start! Mit einigen Optimierungen können Sie Ihre Sichtbarkeit deutlich steigern.';
  } else {
    level = 'low';
    message = 'Viel Potenzial! Lassen Sie uns gemeinsam Ihre Arbeitgeber-Sichtbarkeit verbessern.';
  }

  return {
    score: totalScore,
    percentage,
    level,
    message,
  };
};
