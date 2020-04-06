import { Question } from './question.model';

export interface Quiz {
    id: string;
    name: string;
    theme?: string;
    image?: string;
    questions: Question[];
}

export interface IQuiz {
  id: number;
  name: string;
  img: string;
  theme: string;
  themeColor: string;
  description: string;
  date: string;
  questions: Question[];
}
