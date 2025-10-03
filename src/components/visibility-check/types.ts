export interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    value: number;
  }[];
}

export interface Answer {
  questionId: string;
  value: number;
}

export interface VisibilityCheckResult {
  score: number;
  percentage: number;
  level: 'low' | 'medium' | 'high';
  message: string;
}
