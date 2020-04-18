import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quizzes.service';
import {ModalConfirmComponent} from '../../containers/ui/modals/modal-confirm/modal-confirm.component';
import {ModalGoodAnswerComponent} from '../../containers/ui/modals/modal-good-answer/modal-good-answer.component';
import {ModalConfirmQuitComponent} from '../../containers/ui/modals/modal-confirm-quit/modal-confirm-quit.component';

@Component({
  selector: 'app-question',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {
  fin: boolean;
  public quiz: Quiz;
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

  private dark = 'bg-dark';
  @ViewChild('alertModalRef', {static: true}) alertModalRef: ModalGoodAnswerComponent;
  @ViewChild('alertQuitRef', {static: true}) alertQuitRef: ModalConfirmQuitComponent;
  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router) {}

  finir() {
    this.router.navigate(['/congragulation/' + this.quiz.id]);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; this.questions = quiz.questions; });
    this.quizService.setSelectedQuiz(id);
  }

  fullScreenClick() {
    this.isFullScreen = !this.isFullScreen;
    if (this.isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  get filteredQuestions() {
    if (this.quiz.questions && this.quiz.questions.length === 1) {
      this.fin = true;
    }
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  goTo(index: number) {
    this.pager.count = this.quiz.questions.length;
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
    }
    if (index === this.pager.count - 1) {
      this.fin = true;
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

  verify(item: Answer) {
    if (item.isCorrect) {
      if (this.fin) {
        this.finir();
      } else {
        this.showAlertModal(item.indixe);
        this.goTo(this.pager.index + 1);
      }
    } else {
      item.type = false;
    }
  }
}
