import { Question } from './question.model';


export interface Quiz {
  id: string;
  name: string;
  img: string;
  theme: string;
  themeColor: string;
  description: string;
  date: string;
  questions: Question[];
}
