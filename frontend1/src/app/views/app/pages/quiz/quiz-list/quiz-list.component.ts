import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewQuizModalComponent } from 'src/app/containers/pages/add-new-quiz-modal/add-new-quiz-modal.component';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { ApiService } from 'src/app/data/api.service';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { QUIZZES } from '../../../../../data/productsstat';
import {QuizService} from '../../../../../../services/quizzes.service';
import {Quiz} from '../../../../../../models/quiz.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html'
})
export class QuizListComponent{
  displayMode = 'image';
  selectAllState = '';
  selected: Quiz[] = [];
  data: Quiz[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  search = '';
  orderBy = '';
  isLoading: boolean;
  endOfTheList = false;
  totalItem = 0;
  totalPage = 0;


  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewQuizModalComponent;

  constructor(private hotkeysService: HotkeysService, private apiService: ApiService, private quizService: QuizService, private router: Router) {
    this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.data = quizzes;
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

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  showAddNewModal() {
    this.addNewModalRef.show();
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
       this.router.navigate(['/app/pages/quiz/question-list/' + item.id]);
    }
    if (action === 'launch') {
      this.launchQuiz(item);
    }
  }

  launchQuiz(p: Quiz) {
    this.router.navigate(['/app/pages/quiz/game/' + p.id]);
  }
}
