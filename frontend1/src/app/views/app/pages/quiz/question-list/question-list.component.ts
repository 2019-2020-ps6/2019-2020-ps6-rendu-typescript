import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { AddNewQuizModalComponent } from 'src/app/containers/pages/add-new-quiz-modal/add-new-quiz-modal.component';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { ApiService } from 'src/app/data/api.service';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { QUIZZES } from '../../../../../data/productsstat';
import {QuizService} from '../../../../../../services/quizzes.service';
import {Question} from '../../../../../../models/question.model';
import {ActivatedRoute} from '@angular/router';
import {Quiz} from '../../../../../../models/quiz.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html'
})
export class QuestionListComponent implements OnInit {
  public quiz: Quiz;
  displayMode = 'image';
  selectAllState = '';
  selected: Question[] = [];
  data: Question[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  search = '';
  orderBy = '';
  isLoading: boolean;
  endOfTheList = false;
  totalItem = 0;
  totalPage = 0;

  @Output()
  deleteQuestion: EventEmitter<Question> = new EventEmitter<Question>();


  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewQuizModalComponent;

  constructor(private hotkeysService: HotkeysService, private apiService: ApiService, private quizService: QuizService, private route: ActivatedRoute) {
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; this.data = this.quiz.questions; });
    this.hotkeysService.add(new Hotkey('ctrl+a', (event: KeyboardEvent): boolean => {
      this.selected = [...this.data];
      return false;
    }));
    this.hotkeysService.add(new Hotkey('ctrl+d', (event: KeyboardEvent): boolean => {
      this.selected = [];
      return false;
    }));
  }


  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.quizService.setSelectedQuiz(id);
    this.loadData(this.itemsPerPage, this.currentPage, this.search, this.orderBy);
    // this.data = this.quiz.questions;
    // console.log(this.data);
  }

  loadData(pageSize: number = 10, currentPage: number = 1, search: string = '', orderBy: string = '') {
    this.itemsPerPage = pageSize;
    this.currentPage = currentPage;
    this.search = search;
    this.orderBy = orderBy;

    /*this.quizService.quizzes$.subscribe((quizzes: Quiz[]) => {
      this.data = quizzes;
    });*/

    // this.data = this.quiz.questions;

    this.isLoading = false;
    this.totalItem = 1;
    this.totalPage = 1;
    // this.setSelectAllState();

   /* this.apiService.getQuizzes(pageSize, currentPage, search, orderBy).subscribe(
      data => {
        if (data.status) {
          this.isLoading = false;
          this.data = data.data;
          this.totalItem = data.totalItem;
          this.totalPage = data.totalPage;
          this.setSelectAllState();
        } else {
          this.endOfTheList = true;
        }
      },
      error => {
        this.isLoading = false;
      }
    );*/
  }

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  showAddNewModal() {
    this.addNewModalRef.show();
  }

  isSelected(p: Question) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }
  onSelect(item: Question) {
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

  pageChanged(event: any): void {
    this.loadData(this.itemsPerPage, event.page, this.search, this.orderBy);
  }

  itemsPerPageChange(perPage: number) {
    this.loadData(perPage, 1, this.search, this.orderBy);
  }

  changeOrderBy(item: any) {
    this.loadData(this.itemsPerPage, 1, this.search, item.value);
  }

  searchKeyUp(event) {
    const val = event.target.value.toLowerCase().trim();
    this.loadData(this.itemsPerPage, 1, val, this.orderBy);
  }

  onContextMenuClick(action: string, item: Question) {
    console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.label);
    if (action === 'delete')  {
      this.quizService.deleteQuestion(this.quiz, item);
    }
  }
}
