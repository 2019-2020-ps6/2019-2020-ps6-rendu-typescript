import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { AddNewQuizModalComponent } from 'src/app/containers/pages/add-new-quiz-modal/add-new-quiz-modal.component';
import { HotkeysService, Hotkey } from 'angular2-hotkeys';
import { ApiService } from 'src/app/data/api.service';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { QUIZZES } from '../../../../../data/productsstat';
import {QuizService} from '../../../../../../services/quizzes.service';
import {Question} from '../../../../../../models/question.model';
import {ActivatedRoute, Router} from '@angular/router';
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

  constructor(private hotkeysService: HotkeysService, private apiService: ApiService, private quizService: QuizService, private route: ActivatedRoute, private router: Router) {
    this.quizService.quizSelected$.subscribe((quiz) => {this.quiz = quiz; this.data = quiz.questions; });
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
     const id = this.route.snapshot.paramMap.get('quizId');
     this.quizService.setSelectedQuiz(id);
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

  onContextMenuClick(action: string, item: Question) {
    console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.label);
    if (action === 'delete')  {
      this.quizService.deleteQuestion(this.quiz, item);
    }
    if (action === 'edit') {
      this.router.navigate(['/app/pages/quiz/answer-list/' + this.quiz.id + '/' + item.id]);
    }
  }
}
