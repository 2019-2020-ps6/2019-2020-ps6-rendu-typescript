export interface Score {
  id: string;
  value: string;
  date: string;
  userId: string;
}


export interface  User {
  id: string;
  lastname: string;
  firstname?: string;
  img?: string;
  birthday: Date;
  scores: Score[];
}
