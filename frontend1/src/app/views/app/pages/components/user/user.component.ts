import {Component, OnInit, ViewChild} from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {Router} from '@angular/router';
import {User} from '../../../../../../models/user.model';
import {UserService} from '../../../../../../services/user.service';
import {ContextMenuComponent} from 'ngx-contextmenu';
import {AddNewUserModalComponent} from '../../../../../containers/pages/add-new-user-modal/add-new-user-modal.component';
import {ChartService} from '../../../../../components/charts/chart.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {
  displayMode = 'thumb';
  selectAllState = '';
  selected: User[] = [];
  data: User[] = [];
  itemsPerPage = 8;
  search = '';
  actived: boolean[];

  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewUserModalComponent;
  private usersTmp: User[];

  constructor(private hotkeysService: HotkeysService, private userService: UserService) {
    this.userService.users$.subscribe((users: User[]) => {
      this.data = users;
      this.usersTmp = users;
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
     this.userService.setUsersFromUrl();
     this.actived = [false];
  }

  changeDisplayMode(mode) {
    this.displayMode = mode;
  }

  showAddNewModal() {
     this.addNewModalRef.show();
  }

  isSelected(p: User) {
    return this.selected.findIndex(x => x.id === p.id) > -1;
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
    if (action === 'delete') {
      this.userService.deleteUser(item);
    }
  }

  displayEvolution(i: number) {
    this.actived[i] = true;
  }

  hideEvolution(i: number) {
    this.actived[i] = false;
  }

  filterText(arr: User[], requete: string) {
    return arr.filter((u) => {
      return u.lastname.toLowerCase().indexOf(requete.toLowerCase()) !== -1 || u.firstname.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
  }

  doFiltering(valeur: string) {
    if (valeur !== '') {
      this.data = this.filterText(this.data, valeur);
    } else { this.data = this.usersTmp; }
  }
}
