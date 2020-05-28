import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import {QuizService} from "../../../../services/quizzes.service";
import {Quiz} from "../../../../models/quiz.model";

@Component({
  selector: 'app-list-questions-page-header',
  templateUrl: './list-page-questions-header.component.html'
})
export class ListPageQuestionsHeaderComponent implements OnInit {
  displayOptionsCollapsed = false;
  @Input() quiz : Quiz;
  @Input() showOrderBy = true;
  @Input() valeur = '';
  @Input() showSearch = true;
  @Input() showItemsPerPage = true;
  @Input() showDisplayMode = true;
  @Input() displayMode = 'list';
  @Input() selectAllState = '';
  @Input() itemsPerPage = 10;
  @Input() itemOptionsPerPage = [5, 10, 20];
  @Input() itemOrder = { label: 'Titre', value: 'Titre' };
  @Input()  itemOptionsOrders = [{ label: 'Titre', value: 'title' }, { label: 'Catégorie', value: 'category' }, { label: 'Theme', value: 'status' }];

  @Output() changeDisplayMode: EventEmitter<string> = new EventEmitter<string>();
  @Output() addNewItem: EventEmitter<any> = new EventEmitter();
  @Output() selectAllChange: EventEmitter<any> = new EventEmitter();
  @Output() searchKeyUp: EventEmitter<string> = new EventEmitter<string>();
  @Output() itemsPerPageChange: EventEmitter<any> = new EventEmitter();
  @Output() changeOrderBy: EventEmitter<any> = new EventEmitter();

  @ViewChild('search') search: any;
  constructor() {
  }

  ngOnInit() {
  }

  onSelectDisplayMode(mode: string) {
    this.changeDisplayMode.emit(mode);
  }
  onAddNewItem() {
    this.addNewItem.emit(null);
  }

  onSearchKeyUp($event){
    this.searchKeyUp.emit(this.valeur);
  }
}
