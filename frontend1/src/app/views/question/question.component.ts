import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']

})
export class QuestionComponent implements OnInit {
  @Input() question: Question;

  @Output()
  passAnswerToGameEmiiter: EventEmitter<Answer> = new EventEmitter<Answer>();

  questionNumber = 1;

  fin: boolean;
  constructor(private router: Router) {
    //subscribe to the question
  }

  ngOnInit(): void {
  }

  finir() {this.fin = true; }

  go() {
    this.router.navigate(['/app/pages/quiz/quiz-list']);
  }

  passAnswerToGame($event: Answer) {
    if ( $event.isCorrect === true) {
      this.questionNumber++;
    }
    this.passAnswerToGameEmiiter.emit($event);
  }
}
