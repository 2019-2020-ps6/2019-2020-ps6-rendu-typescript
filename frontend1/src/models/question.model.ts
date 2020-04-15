export interface Answer {
    id: string;
  questionId?: string;
    img?: string;
    indice?: string;
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
