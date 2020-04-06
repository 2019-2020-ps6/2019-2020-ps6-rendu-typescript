import { Quiz } from '../models/quiz.model';
import { Question } from '../models/question.model';

export const QUESTION_ACTOR: Question[] =
  [
    {
    id: '1',
    label: 'Christiano Ronaldo a joué dans quelle équipe ?',
      answers: [
        {
            value: 'FC Barcelone',
            isCorrect: false,
        },
        {
            value: 'Real Madrid',
            isCorrect: true,
        }
    ]
},
{
id: '1',
label: 'Quelle âge avait il lorsque il a rejoint sa première équipe ?',
answers: [
    {
        value: '20',
        isCorrect: false,
    },
    {
        value: '22',
        isCorrect: true,
    }
]
}
];





export const QUIZ_LIST: Quiz[] = [
];
