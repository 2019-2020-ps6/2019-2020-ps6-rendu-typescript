import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']

})
export class AnswerComponent implements OnInit {
  @Input() question: Question;

  @Input()
  answer: Answer;

  @Output()
  answerSelectedEmitter: EventEmitter<Answer> = new EventEmitter<Answer>();
  showIndice: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  answerSelected() {
    console.log(this.showIndice);

    if ( this.answer.isCorrect === false ) {
      console.log(this.showIndice);
      this.showIndice = true;
      console.log(this.showIndice);


    }
    this.answerSelectedEmitter.emit(this.answer);
  }


}
