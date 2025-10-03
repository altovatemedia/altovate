export interface QuestionOption {
  label: string;
  value: string;
  points: number;
}

export interface SubQuestion {
  id: string;
  text: string;
  points: number;
}

export interface Question {
  id: string;
  text: string;
  type: 'radio' | 'checkbox';
  options: QuestionOption[];
  showSubQuestionsIf?: string;
  subQuestions?: SubQuestion[];
}

export interface Answer {
  questionId: string;
  value: string;
  subAnswers?: string[];
}

export interface VisibilityCheckResult {
  score?: number;
  percentage: number;
  level: 'low' | 'medium' | 'high';
  message: string;
}
