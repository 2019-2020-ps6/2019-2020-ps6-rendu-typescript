export interface Answer {
  type: boolean;
    id: string;
  questionId?: string;
    img?: string;
    indixe?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    quizId: string;
    id: string;
    label: string;
    date?: string;
    answers: Answer[];
    img?: string;
}
