import {Component, ElementRef, EmbeddedViewRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {UserService} from '../../../../../services/user.service';
import {User} from '../../../../../models/user.model';
import {Quiz} from '../../../../../models/quiz.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-choice',
  templateUrl: './user-choice.component.html',
})
export class UserChoiceComponent implements OnInit {
  modalRef: BsModalRef;
  message: string;
  userSelected: User;
  quiz: Quiz;
  users: User[] = [];
  actived: string[] = [''];
  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  constructor(private modalService: BsModalService, private userService: UserService, private router: Router) {
    this.userService.users$.subscribe((users: User[]) => {
      this.users = users;
    });
  }

  ngOnInit(): void {
    this.userService.setUsersFromUrl();
  }

  openModal(p) {
    this.quiz = p;
    this.modalRef = this.modalService.show(this.template, { class: 'modal-lg modal-dialog-scrollable'});
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
    this.router.navigate(['/game/' + this.quiz.id + '/' + this.userSelected.id]);
  }

  hide() {
    this.modalRef.hide();
  }

  setSelected(item: User, i: number) {
    this.actived = [''];
    this.actived[i] = 'btn btn-outline-primary btn-lg btn-block';
    this.userSelected = item;
  }
}
