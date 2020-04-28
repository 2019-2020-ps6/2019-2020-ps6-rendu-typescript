import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Quiz} from '../../../../models/quiz.model';
import {QuizService} from '../../../../services/quizzes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ModalAddComponent} from '../../ui/modals/modal-add/modal-add.component';

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
  categories = [
    { label: 'CAKES', value: 'CAKES' },
    { label: 'CUPCAKES', value: 'CUPCAKES' },
    { label: 'SPORT', value: 'SPORT'},
    { label: 'ACTOR', value: 'ACTOR'},
    { label: 'DESSERTS', value: 'DESSERTS' }
  ];


  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild('addAlertModal') addAlertModal: ModalAddComponent;
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

  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const quizToCreate: Quiz = this.quizForm.getRawValue() as Quiz;
    quizToCreate.date = new Date().toDateString();
    quizToCreate.img = this.selectedFile;
    if (quizToCreate.theme === 'CAKES') {
      quizToCreate.themeColor = 'secondary';
    }
    if (quizToCreate.theme === 'CUPCAKES') {
      quizToCreate.themeColor = 'primary';
    }
    if (quizToCreate.theme === 'DESSERTS') {
      quizToCreate.themeColor = 'success';
    }
    if (quizToCreate.theme === 'SPORT') {
      quizToCreate.themeColor = 'warning';
    }
    if (quizToCreate.theme === 'ACTOR') {
      quizToCreate.themeColor = 'danger';
    }
    this.quizService.addQuiz(quizToCreate);
    this.showAddAlertModal();
    this.quizForm.reset();
    this.modalRef.hide();
  }

  onFileSelected(event) {
    console.log(event);
    console.log(this.selectedFile = event.target.files[0]);
    this.selectedFile = '/assets/img/' + event.target.files[0].name;
    console.log(this.selectedFile);
  }

}
