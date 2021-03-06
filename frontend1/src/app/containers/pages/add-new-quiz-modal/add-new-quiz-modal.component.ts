import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Quiz} from '../../../../models/quiz.model';
import {QuizService} from '../../../../services/quizzes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalAddComponent} from '../../ui/modals/modal-add/modal-add.component';
import {ModalFormNotValidComponent} from '../../ui/modals/modal-form-not-valid/modal-form-not-valid.component';

@Component({
  selector: 'app-add-new-quiz-modal',
  templateUrl: './add-new-quiz-modal.component.html',
  styles: []
})
export class AddNewQuizModalComponent implements OnInit {

  public quizForm: FormGroup;
  private selectedFile = '';
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };
  themeColor = [
    'secondary',
    'primary',
    'success',
    'warning',
    'danger'
  ]

  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild('addAlertModal') addAlertModal: ModalAddComponent;
  @ViewChild('formNotValid') formNotValid: ModalFormNotValidComponent;
  constructor(private modalService: BsModalService, private quizService: QuizService, private formBuilder: FormBuilder) {
    this.quizForm = this.formBuilder.group({
      name: [''],
      theme: [''],
      img: [''],
      description: [''],
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

  private showFormNotValidModal() {
    this.formNotValid.openModal();
  }

  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    quizToCreate.date = new Date().toDateString();
    quizToCreate.img = this.selectedFile;
    quizToCreate.theme = quizToCreate.theme.toUpperCase();
    quizToCreate.themeColor = this.themeColor[Math.floor(Math.random() * this.themeColor.length)];

    if (this.verifyAllField(quizToCreate)) {
      this.quizService.addQuiz(quizToCreate);
      this.showAddAlertModal();
      this.quizForm.reset();
      this.modalRef.hide();
    } else {
      this.showFormNotValidModal();
    }
  }

  verifyAllField(quiz: Quiz) {
    if (quiz.theme === '' || quiz.name === '' || quiz.description === '' || quiz.img === '') { return false; }
    return true;
  }

  onFileSelected(event) {
    console.log(event);
    console.log(this.selectedFile = event.target.files[0]);
    this.selectedFile = '/assets/img/' + event.target.files[0].name;
    console.log(this.selectedFile);
  }

}
