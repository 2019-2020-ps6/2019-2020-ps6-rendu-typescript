import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, of, Subject} from 'rxjs';
import { QUIZ_LIST } from '../mocks/quiz-list.mock';
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

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public quizzes$: BehaviorSubject<Quiz[]>
    = new BehaviorSubject(this.quizzes);

  public quizSelected$: Subject<Quiz> = new Subject();
  public questionSelected$: Subject<Question> = new Subject();

  private quizzesUrl = serverUrl + '/quizzes';
  private questionsPath = 'questions';
  private answersPath='Answers';

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
      this.quizSelected$.next(quiz);
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

  setSelectedQuestion(quizId: string, question: Question) {
    const url= this.quizzesUrl + '/' + quizId + this.questionsPath + '/' +question.id + this.answersPath
    this.http.get<Question>(url).subscribe((question) => {
      this.questionSelected$.next(question);
    });
  }

  deleteAnswer(quizId: string, question: Question,answer : Answer) {
    const anserUrl = this.quizzesUrl + '/' + quizId + '/' + this.questionsPath + '/' + question.id + '/'+this.answersPath + '/' + answer.id;
    this.http.delete<Answer>(anserUrl).subscribe(() => this.setSelectedQuestion(quizId,question));
  }

  updateAnswer(quizId: string, question: Question,answer : Answer) {
    const anserUrl = this.quizzesUrl + '/' + quizId + '/' + this.questionsPath + '/' + question.id + '/'+this.answersPath + '/' + answer.id;
    this.http.put<Answer>(anserUrl,answer).subscribe(() => this.setSelectedQuestion(quizId,question));
  }
  /** Note: The functions below don't interact with the server. It's an example of implementation for the exercice 10.

   addQuestion(quiz: Quiz, question: Question) {
    quiz.questions.push(question);
    const index = this.quizzes.findIndex((q: Quiz) => q.id === quiz.id);
    if (index) {
      this.updateQuizzes(quiz, index);
    }
  }

   deleteQuestion(quiz: Quiz, question: Question) {
    const index = quiz.questions.findIndex((q) => q.label === question.label);
    if (index !== -1) {
      quiz.questions.splice(index, 1)
      this.updateQuizzes(quiz, index);
    }
  }

   private updateQuizzes(quiz: Quiz, index: number) {
    this.quizzes[index] = quiz;
    this.quizzes$.next(this.quizzes);
  }
   **/
}
