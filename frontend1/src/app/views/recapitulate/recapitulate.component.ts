import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quizzes.service';
import {ModalGoodAnswerComponent} from '../../containers/ui/modals/modal-good-answer/modal-good-answer.component';
import {ModalConfirmQuitComponent} from '../../containers/ui/modals/modal-confirm-quit/modal-confirm-quit.component';
import {Score, User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-recapitulate',
  templateUrl: './recapitulate.component.html',
})
export class RecapitulateComponent implements OnInit {
  fin: boolean;
  public quiz: Quiz;
  public user: User;
  public questions: Question[];
  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  isFullScreen = false;
  private color = [
    'bg-primary',
    'bg-danger',
    'bg-success',
    'bg-warning',
    'bg-secondary',
    'bg-info'
  ];
  isMultiColorActive = environment.isMultiColorActive;
  private dark = 'bg-dark';
  @ViewChild('alertModalRef', {static: true}) alertModalRef: ModalGoodAnswerComponent;
  @ViewChild('alertQuitRef', {static: true}) alertQuitRef: ModalConfirmQuitComponent;
  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.setSelectedQuiz(id);
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; this.questions = quiz.questions; });

    const id1 = this.route.snapshot.paramMap.get('userId');
    this.userService.setSelectedUser(id1);
    this.userService.userSelected$.subscribe((user) => {this.user = user; });
  }

  fullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  showAlertModal(msg) {
    this.alertModalRef.openModal(msg);
  }

  showQuitModal() {
    this.alertQuitRef.openModal();
  }

  getColor(item: Answer, param: number) {
    if (!item.type) { return this.dark; }
    return this.color[param % this.color.length];
  }

  finir() {
    this.router.navigate(['/congratulations/' + this.quiz.id + '/' + this.user.id]);
  }


}
