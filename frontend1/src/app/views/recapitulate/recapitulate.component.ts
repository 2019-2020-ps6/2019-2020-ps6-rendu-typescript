import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quizzes.service';
import {User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';
import {environment} from "../../../environments/environment";
import {ModalRecapitulateComponent} from "../../containers/ui/modals/modal-recapitulate/modal-recapitulate.component";
import {ModalConfirmQuitComponent} from "../../containers/ui/modals/modal-confirm-quit/modal-confirm-quit.component";

@Component({
  selector: 'app-recapitulate',
  templateUrl: './recapitulate.component.html',
})
export class RecapitulateComponent implements OnInit {
  fin: boolean;
  public quiz: Quiz;
  public user: User;
  public questions: Question[];
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
  @ViewChild('alertModalRef', {static: true}) alertModalRef: ModalRecapitulateComponent;
  @ViewChild('alertQuitRef', {static: true}) alertQuitRef: ModalConfirmQuitComponent;
  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.setSelectedQuiz(id);
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; this.questions = quiz.questions; });

    const id1 = this.route.snapshot.paramMap.get('userId');
    this.userService.setSelectedUser(id1);
    this.userService.userSelected$.subscribe((user) => {this.user = user; });

    this.showAlertModal();
  }

  fullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  showAlertModal() {
    this.alertModalRef.openModal();
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
