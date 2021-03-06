import {Component, TemplateRef, OnInit, ViewChild, Input} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Quiz} from '../../../../models/quiz.model';
import {QuizService} from '../../../../services/quizzes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Answer, Question} from '../../../../models/question.model';
import {ActivatedRoute} from '@angular/router';
import {ModalAddComponent} from '../../ui/modals/modal-add/modal-add.component';
import {ModalFormNotValidComponent} from '../../ui/modals/modal-form-not-valid/modal-form-not-valid.component';

@Component({
  selector: 'app-add-new-answer-modal',
  templateUrl: './add-new-answer-modal.component.html',
  styles: []
})
export class AddNewAnswerModalComponent implements OnInit {
  @Input() answers: Answer[];
  public answerForm: FormGroup;
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
  constructor(private modalService: BsModalService, private quizService: QuizService, private formBuilder: FormBuilder, private route: ActivatedRoute, ) {
    this.answerForm = this.formBuilder.group({
      value: [''],
      img: [''],
      indixe: [''],
      isCorrect: [''],
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

  addAnswer() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const answerToCreate: Answer = this.answerForm.getRawValue() as Answer;
    answerToCreate.img = this.selectedFile;
    if (answerToCreate.img === '') {
     answerToCreate.img = 'none';
    }
    if (!answerToCreate.isCorrect) {
      answerToCreate.isCorrect = false;
    }
    answerToCreate.type = true;
    // console.log(answerToCreate.isCorrect);
    // this.quizService.addAnswer(quizToCreate);

    if (this.verifyAllField(answerToCreate)) {
      this.updateAnswer(answerToCreate);
      this.answers.push(answerToCreate);
      this.showAddAlertModal();
      this.answerForm.reset();
      this.modalRef.hide();
    } else {
      this.showFormNotValidModal();
    }
  }

  verifyAllField(answer: Answer) {
    if (answer.value === '' || answer.indixe === '' || (this.answers.length > 0 && this.verify() === true && answer.img === 'none')) { return false; }
    return true;
  }

  verify() {
    if (this.answers.length > 0) {
      if (this.answers[0].img === 'none') {
        return false;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }

  onFileSelected(event) {
    // console.log(event);
    // console.log(this.selectedFile = event.target.files[0]);
    this.selectedFile = '/assets/img/' + event.target.files[0].name;
    // console.log(this.selectedFile);
  }

  updateAnswer(answerToCreate: Answer) {
    // console.log(answerToCreate);
    this.quizService.addAnswer(this.route.snapshot.paramMap.get('quizId'), this.route.snapshot.paramMap.get('questionId'), answerToCreate);
  }

}
