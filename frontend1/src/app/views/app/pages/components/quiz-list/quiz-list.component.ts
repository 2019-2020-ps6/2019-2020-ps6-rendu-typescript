import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewQuizModalComponent } from 'src/app/containers/pages/add-new-quiz-modal/add-new-quiz-modal.component';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import {QuizService} from '../../../../../../services/quizzes.service';
import {Quiz} from '../../../../../../models/quiz.model';
import { Router} from '@angular/router';
import {ModalConfirmComponent} from '../../../../../containers/ui/modals/modal-confirm/modal-confirm.component';
import {User} from '../../../../../../models/user.model';
import {UserService} from '../../../../../../services/user.service';
import {UserChoiceComponent} from '../../../../../containers/ui/modals/user-choice/user-choice.component';
import {ContextMenuComponent} from 'ngx-contextmenu';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html'
})
export class QuizListComponent implements OnInit {
  displayMode = 'image';
  selectAllState = '';
  selected: Quiz[] = [];
  data: Quiz[] = [];
  users: User[] = [];
  currentPage = 1;
  allIsGood = true;
  itemsPerPage = 8;
  search = '';
  orderBy = '';
  totalItem = 0;


  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewQuizModalComponent;
  @ViewChild('alertModalRef', {static: true}) alertModalRef: ModalConfirmComponent;
  @ViewChild('userChoiceRef', {static: true}) userChoiceRef: UserChoiceComponent;
  private quizzesTmp: Quiz[];

  constructor(private hotkeysService: HotkeysService, private quizService: QuizService, private router: Router, private userService: UserService) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.data = quizzes;
      this.quizzesTmp = quizzes;
    });

    this.userService.users$.subscribe((users: User[]) => {
      this.users = users;
    });
    this.hotkeysService.add(new Hotkey('ctrl+a', (event: KeyboardEvent): boolean => {
      this.selected = [...this.data];
      return false;
    }));
    this.hotkeysService.add(new Hotkey('ctrl+d', (event: KeyboardEvent): boolean => {
      this.selected = [];
      return false;
    }));
  }

  ngOnInit(): void {
     this.quizService.setQuizzesFromUrl();
     this.userService.setUsersFromUrl();
  }

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  showAddNewModal() {
    this.addNewModalRef.show();
  }

  showAlertModal() {
    this.alertModalRef.openModal();
  }

  showUserChoiceModal(p: Quiz) {
    this.userChoiceRef.openModal(p);
  }

  isSelected(p: Quiz) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  onSelect(item: Quiz) {
    if (this.isSelected(item)) {
      this.selected = this.selected.filter(x => x.id !== item.id);
    } else {
      this.selected.push(item);
    }
    this.setSelectAllState();
  }

  setSelectAllState() {
    if (this.selected.length === this.data.length) {
      this.selectAllState = 'checked';
    } else if (this.selected.length !== 0) {
      this.selectAllState = 'indeterminate';
    } else {
      this.selectAllState = '';
    }
  }

  selectAllChange($event) {
    if ($event.target.checked) {
      this.selected = [...this.data];
    } else {
      this.selected = [];
    }
    this.setSelectAllState();
  }

  onContextMenuClick(action: string, item: Quiz) {
    console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.name);
    if (action === 'delete') {
       this.quizService.deleteQuiz(item);
    }
    if (action === 'edit') {
       this.router.navigate(['/app/pages/components/question-list/' + item.id]);
    }
    if (action === 'launch') {
      this.launchQuiz(item);
    }
  }

  launchQuiz(p: Quiz) {
    p.questions.forEach(question => {
      if (question.answers.length === 0) { this.allIsGood = false; }
    });
    if (p.questions.length > 0 && this.allIsGood) {
       this.showUserChoiceModal(p);
    } else {
      this.showAlertModal();
    }
  }

   filterText(arr: Quiz[], requete: string) {
    return arr.filter((q) => {
      return q.name.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
  }

  doFiltering(valeur: string) {
    console.log('Valeur de value = ' + valeur);
    if (valeur !== '') {
      this.data = this.filterText(this.data, valeur);
    } else { this.data = this.quizzesTmp; }
  }
}
