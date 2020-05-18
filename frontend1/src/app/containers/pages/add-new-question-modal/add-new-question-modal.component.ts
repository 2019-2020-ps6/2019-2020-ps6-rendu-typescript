import {Component, TemplateRef, OnInit, ViewChild, Input} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {QuizService} from '../../../../services/quizzes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Question} from '../../../../models/question.model';
import {Quiz} from '../../../../models/quiz.model';
import {ModalAddComponent} from '../../ui/modals/modal-add/modal-add.component';
import {User} from '../../../../models/user.model';
import {ModalFormNotValidComponent} from '../../ui/modals/modal-form-not-valid/modal-form-not-valid.component';

@Component({
  selector: 'app-add-new-question-modal',
  templateUrl: './add-new-question-modal.component.html',
  styles: []
})
export class AddNewQuestionModalComponent implements OnInit {
  @Input() quiz: Quiz;
  public questionForm: FormGroup;
  private selectedFile = '';
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };


  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  @ViewChild('addAlertModal') addAlertModal: ModalAddComponent;
  @ViewChild('formNotValid') formNotValid: ModalFormNotValidComponent;
  constructor(private modalService: BsModalService, private quizService: QuizService, private formBuilder: FormBuilder) {
    this.questionForm = this.formBuilder.group({
      label: [''],
      img: [''],
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

  addQuestion() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const questionToCreate: Question = this.questionForm.getRawValue() as Question;
    questionToCreate.date = new Date().toDateString();
    questionToCreate.img = this.selectedFile;
    if (questionToCreate.img === '') {
      questionToCreate.img = 'none';
    }
    console.log(questionToCreate);
    if (this.verifyAllField(questionToCreate)) {
      this.quizService.addQuestion(this.quiz, questionToCreate);
      this.showAddAlertModal();
      this.questionForm.reset();
      this.modalRef.hide();
    } else {
      this.showFormNotValidModal();
    }
  }

  verifyAllField(question: Question) {
    if (question.label === '' || question.img === '') { return false; }
    return true;
  }

  onFileSelected(event) {
    // console.log(event);
    // console.log(this.selectedFile = event.target.files[0]);
    this.selectedFile = '/assets/img/' + event.target.files[0].name;
    // console.log(this.selectedFile);
  }

}
