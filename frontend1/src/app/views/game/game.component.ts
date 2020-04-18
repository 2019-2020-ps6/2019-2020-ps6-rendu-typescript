import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quizzes.service';
import {Answer, Question} from '../../../models/question.model';
import {QUIZ_LIST} from '../../../mocks/quizzes.mock';

import {Quiz} from '../../../models/quiz.model';
import {ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {

  public questions: Question[];
  public quizSelected: Quiz;

  questionNumber = 0;
  gameScore = 0;

  constructor(private quizService: QuizService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    //const id = this.route.snapshot.paramMap.get('quizId');
    //this.quizService.quizSelected$.subscribe((quiz) => {this.quizSelected = quiz; this.questions = quiz.questions});
    this.quizSelected = QUIZ_LIST[0];
    this.questions = this.quizSelected.questions;
    console.log("selected quiz from game " + this.quizSelected);
    console.log("selected quiz from game " + this.questions);

  }

  answerSelected($event: Answer) {
    if ($event.isCorrect === true) {
      this.gameScore++;
      this.quizService.setSelectedQuestion(this.quizSelected.id, $event.questionId);
    } else {


    }
  }
}
