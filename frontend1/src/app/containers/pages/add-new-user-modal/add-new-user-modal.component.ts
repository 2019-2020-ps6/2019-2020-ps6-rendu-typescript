import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Quiz} from '../../../../models/quiz.model';
import {QuizService} from '../../../../services/quizzes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalAddComponent} from '../../ui/modals/modal-add/modal-add.component';
import {UserService} from '../../../../services/user.service';
import {User} from '../../../../models/user.model';

@Component({
  selector: 'app-add-new-user-modal',
  templateUrl: './add-new-user-modal.component.html',
  styles: []
})
export class AddNewUserModalComponent implements OnInit {
  public userForm: FormGroup;
  private selectedFile = '';
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };


  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild('addAlertModal') addAlertModal: ModalAddComponent;
  constructor(private modalService: BsModalService, private userService: UserService, private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      img: [''],
      birthday: [''],
    });
  }

  ngOnInit() {

  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  showAddAlertModal() {
    this.addAlertModal.openModal();
  }

  addUser() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const userToCreate: User = this.userForm.getRawValue() as User;
    userToCreate.img = this.selectedFile;
    this.userService.addUser(userToCreate);
    // console.log(userToCreate);
    this.showAddAlertModal();
    this.userForm.reset();
    this.modalRef.hide();
  }

  onFileSelected(event) {
    // console.log(event);
    // console.log(this.selectedFile = event.target.files[0]);
    this.selectedFile = '/assets/img/' + event.target.files[0].name;
    // console.log(this.selectedFile);
  }

}
