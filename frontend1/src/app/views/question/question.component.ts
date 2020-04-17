import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../../models/question.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
})
export class QuestionComponent implements OnInit {
  @Input() question: Question;
  fin: boolean;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  finir() {this.fin = true; }

  go() {
    this.router.navigate(['/app/pages/quiz/quiz-list']);
  }

}
