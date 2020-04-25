import { Component, OnInit, OnDestroy } from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quizzes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-congragulation',
  templateUrl: './congragulation.component.html'
})
export class CongragulationComponent implements OnInit, OnDestroy {
  public quiz: Quiz;
  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    document.body.classList.add('background');
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; });
    this.quizService.setSelectedQuiz(id);
  }

  ngOnDestroy() {
    document.body.classList.remove('background');
  }

  finir() {
    this.router.navigate(['/app/pages/components/quiz-list/']);
  }

  replay() {
    this.router.navigate(['/game/' + this.quiz.id]);
  }
}
