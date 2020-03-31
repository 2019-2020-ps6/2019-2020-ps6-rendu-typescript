import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Quiz } from '../../../models/quiz.model';
import { Question } from '../../../models/question.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input()
  quiz: Quiz;


  selected = false;

  @Output()
  quizSelected: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  editQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  @Output()
  deleteQuiz: EventEmitter<Quiz> = new EventEmitter<Quiz>();

  constructor() {
  }

  ngOnInit() {
  }

  selectQuiz() {
    this.quizSelected.emit(true);
    this.selected = true;
  }

  edit() {
    this.editQuiz.emit(this.quiz);
  }

  delete() {
    this.deleteQuiz.emit(this.quiz);
  }
}
