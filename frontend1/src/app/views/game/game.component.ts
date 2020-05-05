import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Answer, Question} from '../../../models/question.model';
import {ActivatedRoute, Router} from '@angular/router';
import {Quiz} from '../../../models/quiz.model';
import {QuizService} from '../../../services/quizzes.service';
import {ModalConfirmComponent} from '../../containers/ui/modals/modal-confirm/modal-confirm.component';
import {ModalGoodAnswerComponent} from '../../containers/ui/modals/modal-good-answer/modal-good-answer.component';
import {ModalConfirmQuitComponent} from '../../containers/ui/modals/modal-confirm-quit/modal-confirm-quit.component';
import {Score, User} from '../../../models/user.model';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
})
export class GameComponent implements OnInit {
  fin: boolean;
  public nbrIndiceUtilise = 0;
  nbrReponse = 0;
  nbrReponseKo = 0;
  nbrReponsePasser = 0;
  public quiz: Quiz;
  public user: User;
  public questions: Question[];
  public score = 0;
  public answerRight = 0;
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
  constructor(private quizService: QuizService, private route: ActivatedRoute, private router: Router, private userService: UserService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('quizId');
    this.quizService.setSelectedQuiz(id);
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; this.questions = quiz.questions; });

    const id1 = this.route.snapshot.paramMap.get('userId');
    this.userService.setSelectedUser(id1);
    this.userService.userSelected$.subscribe((user) => {this.user = user; });
  }

  finir(question: Question) {
   // this.incrementNbrReponsePasse(question);
    this.calculateScore();
    this.updateUserScore();
    this.router.navigate(['/congratulations/' + this.quiz.id + '/' + 1587457953258]);
   // this.nbrReponsePasser=0;
    this.nbrIndiceUtilise=0;
    this.nbrReponse=0;
    this.score=0;
    console.log(this.score);
  }

  updateUserScore() {
    const scoreToCreate =  {
      value: this.score.toString(),
      date: new Date().toDateString(),
      userId: this.user.id,
    } as Score;
    this.userService.addScore(this.user, scoreToCreate);
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

  calculateScore() {
    this.questions.forEach(q => this.nbrReponse = this.nbrReponse + q.answers.length);
    const  proportionIndice = 100 / this.nbrReponse;
    const  proportionRep = 100 / this.nbrReponse;

    this.score = 100-(this.nbrIndiceUtilise*proportionIndice+ proportionRep*this.nbrReponsePasser);
    console.log("Score = "+this.score);
    if (this.score<0)
      this.score=0;
    this.score = Number(this.score.toFixed(2));
    console.log(this.score);
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

  verify(item: Answer, question: Question) {
    if (item.isCorrect) {
     // question.answers.forEach(a => this.nbrReponse= this.nbrReponse + a.length);
      this.answerRight++;
      if (this.fin) {
        this.finir(question);
      } else {
        this.showAlertModal(item.indixe);
        this.goTo(this.pager.index + 1);
      }
    } else {
      this.nbrIndiceUtilise++;
      item.type = false;
    }
  }

  incrementNbrReponsePasse(question: Question) {
    this.nbrReponsePasser=this.nbrReponsePasser + question.answers.length;
    console.log("Nombre reponse passé = "+this.nbrReponsePasser);
  }

}
