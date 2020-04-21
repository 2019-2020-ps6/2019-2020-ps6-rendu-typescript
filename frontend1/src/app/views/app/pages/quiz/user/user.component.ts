import {Component, OnInit, ViewChild} from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {ApiService} from '../../../../../data/api.service';
import {Router} from '@angular/router';
import {User} from '../../../../../../models/user.model';
import {UserService} from '../../../../../../services/user.service';
import {ContextMenuComponent} from 'ngx-contextmenu';
import {AddNewQuizModalComponent} from '../../../../../containers/pages/add-new-quiz-modal/add-new-quiz-modal.component';
import {AddNewUserModalComponent} from '../../../../../containers/pages/add-new-user-modal/add-new-user-modal.component';
import {Quiz} from "../../../../../../models/quiz.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit{
  displayMode = 'thumb';
  selectAllState = '';
  selected: User[] = [];
  data: User[] = [];
  currentPage = 1;
  itemsPerPage = 8;
  search = '';
  orderBy = '';
  isLoading: boolean;
  endOfTheList = false;
  totalItem = 0;
  totalPage = 0;

  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewUserModalComponent;
  private usersTmp: User[];

  constructor(private hotkeysService: HotkeysService, private apiService: ApiService, private userService: UserService, private router: Router) {
    this.userService.users$.subscribe((users: User[]) => {
      this.data = users;
      this.usersTmp=users;
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
    // this.userService.setUsersFromUrl();
  }

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  showAddNewModal() {
     this.addNewModalRef.show();
  }

  showAlertModal() {
    // this.alertModalRef.openModal();
  }

  isSelected(p: User) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
  }

  onSelect(item: User) {
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

  onContextMenuClick(action: string, item: User) {
    console.log('onContextMenuClick -> action :  ', action, ', item.title :', item.firstname);
    if (action === 'delete') {
      this.userService.deleteUser(item);
    }
    if (action === 'edit') {
      // this.router.navigate(['/app/pages/quiz/question-list/' + item.id]);
    }
  }

  filterText(arr: User[], requete: string) {
    return arr.filter(function (u) {
      return u.lastname.toLowerCase().indexOf(requete.toLowerCase()) !== -1 || u.firstname.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    })
  }

  doFiltering(valeur :string) {
    console.log("Valeur de value = "+valeur);
    if (valeur != '')
      this.data=this.filterText(this.data,valeur);
    else this.data=this.usersTmp;
  }
}
