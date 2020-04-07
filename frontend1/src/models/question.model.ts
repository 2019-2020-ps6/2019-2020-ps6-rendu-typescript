export interface Answer {
    id: string;
    type?: string;
    value: string;
    isCorrect: boolean;
}

export interface Question {
    id: string;
    label: string;
    date?: string;
    answers: Answer[];
    img?: string;
}
