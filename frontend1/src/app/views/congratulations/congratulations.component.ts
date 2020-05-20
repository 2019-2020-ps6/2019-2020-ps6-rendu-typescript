import { Component, OnInit, OnDestroy } from '@angular/core';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quizzes.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service';
import {User} from '../../../models/user.model';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-congratulations',
  templateUrl: './congratulations.component.html'
})
export class CongratulationsComponent implements OnInit, OnDestroy {
  public quiz: Quiz;
  public user: User;
  isMultiColorActive = environment.isMultiColorActive;
  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router, private userService: UserService) { }


  ngOnInit() {
    this.quizService.setQuizzesFromUrl();
    this.userService.setUsersFromUrl();
    document.body.classList.add('background');
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; });
    this.quizService.setSelectedQuiz(id);
    const userId = this.route.snapshot.paramMap.get('userId');
    this.userService.userSelected$.subscribe((user) => {this.user = user; });
    this.userService.setSelectedUser(userId);
  }

  ngOnDestroy() {
    document.body.classList.remove('background');
  }

  finir() {
    this.router.navigate(['/app/pages/components/quiz-list/']);
  }

  replay() {
    this.router.navigate(['/game/' + this.quiz.id + '/' + this.user.id]);
  }
}
