import { Answer, VisibilityCheckResult } from './types';
import { questions } from './questions';

export const calculateScore = (answers: Answer[]): VisibilityCheckResult => {
  let totalPoints = 0;
  let maxPossiblePoints = 0;

  answers.forEach(answer => {
    const question = questions.find(q => q.id === answer.questionId);
    if (!question) return;

    // Main question points
    const selectedOption = question.options.find(opt => opt.value === answer.value);
    if (selectedOption) {
      totalPoints += selectedOption.points;
      maxPossiblePoints += Math.max(...question.options.map(o => o.points));
    }

    // Sub-questions points (if applicable)
    if (answer.subAnswers && question.subQuestions) {
      answer.subAnswers.forEach(subId => {
        const subQ = question.subQuestions!.find(sq => sq.id === subId);
        if (subQ) totalPoints += subQ.points;
      });
      // Add max possible from sub-questions
      maxPossiblePoints += question.subQuestions.reduce((sum, sq) => sum + sq.points, 0);
    }
  });

  const percentage = maxPossiblePoints > 0 
    ? Math.round((totalPoints / maxPossiblePoints) * 100) 
    : 0;

  let level: 'low' | 'medium' | 'high';
  let message: string;

  if (percentage <= 40) {
    level = 'low';
    message = 'Du bist aktuell kaum sichtbar. Kunden und Bewerber finden dich eher zufällig – hier liegt dein größtes Potenzial.';
  } else if (percentage <= 70) {
    level = 'medium';
    message = 'Du bist auf dem Radar – aber noch nicht dominant sichtbar. Mit wenigen gezielten Schritten kannst du deutlich mehr Präsenz aufbauen.';
  } else {
    level = 'high';
    message = 'Stark! Deine Basis ist solide. Die letzten 20–30 % machen den Unterschied zwischen „man kennt dich" und „man wählt dich".';
  }

  return {
    percentage,
    level,
    message,
  };
};
