import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, of, Subject} from 'rxjs';
import { QUIZ_LIST } from '../mocks/quizzes.mock';
import {Answer, Question} from '../models/question.model';
import { serverUrl, httpOptionsBase } from '../configs/server.config';
import {Quiz} from '../models/quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

  /**
   * The list of quiz.
   * The list is retrieved from the mock.
   */
  private quizzes: Quiz[];
  public  quizsel: Quiz;

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]>
    = new BehaviorSubject(this.quizzes);

  public quizSelected$: BehaviorSubject<Quiz> = new BehaviorSubject(this.quizsel);
  public questionSelected$: Subject<Question> = new Subject();

  private quizzesUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';
  private answersPath = 'answers';

  private httpOptions = httpOptionsBase;

  constructor(private http: HttpClient) {
     this.setQuizzesFromUrl();
  }

  setQuizzesFromUrl() {
    this.http.get<Quiz[]>(this.quizzesUrl).subscribe((quizList) => {
      this.quizzes = quizList;
      this.quizzes$.next(this.quizzes);
    });

  }

  getQuestions() {

  }

  addQuiz(quiz: Quiz) {
    this.http.post<Quiz>(this.quizzesUrl, quiz, this.httpOptions).subscribe(() => this.setQuizzesFromUrl());
  }

  deleteQuiz(quiz: Quiz) {
    const urlWithId = this.quizzesUrl + '/' + quiz.id;
    this.http.delete<Quiz>(urlWithId, this.httpOptions).subscribe(() => this.setQuizzesFromUrl());
  }

  getQuiz(id: number) {
    this.setQuizzesFromUrl();
    console.log(this.quizzes);
    return of(this.quizzes.find(quiz => +quiz.id === id));
  }

  setSelectedQuiz(quizId: string) {
    const urlWithId = this.quizzesUrl + '/' + quizId;
    this.http.get<Quiz>(urlWithId).subscribe((quiz) => {
      this.quizsel=quiz;
      //console.log(this.quizsel);
      this.quizSelected$.next(quiz);
    });
  }

  setSelectedQuestion(quizId: string, questionId: string) {
    const url = this.quizzesUrl + '/' + quizId + '/' + this.questionsPath + '/' + questionId + '/' + this.answersPath;
    this.http.get<Question>(url).subscribe((question) => {
      this.questionSelected$.next(question);
    });
  }


  addQuestion(quiz: Quiz, question: Question) {
    const questionUrl = this.quizzesUrl + '/' + quiz.id + '/' + this.questionsPath;
    this.http.post<Question>(questionUrl, question, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  deleteQuestion(quiz: Quiz, question: Question) {
    const questionUrl = this.quizzesUrl + '/' + quiz.id + '/' + this.questionsPath + '/' + question.id;
    this.http.delete<Question>(questionUrl, this.httpOptions).subscribe(() => this.setSelectedQuiz(quiz.id));
  }

  addAnswer(quizId: string, questionId: string, answer: Answer) {
    const anserUrl = this.quizzesUrl + '/' + quizId + '/' + this.questionsPath + '/' + questionId + '/' + this.answersPath;
    this.http.post<Answer>(anserUrl, answer, this.httpOptions).subscribe(() => this.setSelectedQuestion(quizId, questionId));
  }


  deleteAnswer(quizId: string, questionId: string, answer: Answer) {
    const anserUrl = this.quizzesUrl + '/' + quizId + '/' + this.questionsPath + '/' + questionId + '/' + this.answersPath + '/' + answer.id;
    this.http.delete<Answer>(anserUrl).subscribe(() => this.setSelectedQuestion(quizId, questionId));
  }

  updateAnswer(quizId: string, questionId: string, answer: Answer) {
    const anserUrl = this.quizzesUrl + '/' + quizId + '/' + this.questionsPath + '/' + questionId + '/' + this.answersPath + '/' + answer.id;
    this.http.put<Answer>(anserUrl, answer).subscribe(() => this.setSelectedQuestion(quizId, questionId));
  }

}
