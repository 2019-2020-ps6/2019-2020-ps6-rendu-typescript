import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/services/quizzes.service';
import {Question} from '../../../models/question.model';
import {Quiz} from '../../../models/quiz.model';
import {ActivatedRoute, RouterModule} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {

  public questions: Question[];
  public quizSelected: Quiz;

  constructor(private quizService: QuizService, private route: ActivatedRoute) {
    this.quizService.quizSelected$.subscribe((quiz) => {this.quizSelected = quiz; this.questions = quiz.questions});
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.setSelectedQuiz(id);
  }

}
