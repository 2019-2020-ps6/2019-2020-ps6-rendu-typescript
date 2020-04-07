import {Component, TemplateRef, OnInit, ViewChild, Input} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Quiz} from '../../../../models/quiz.model';
import {QuizService} from '../../../../services/quizzes.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Answer, Question} from '../../../../models/question.model';

@Component({
  selector: 'app-add-new-answer-modal',
  templateUrl: './add-new-answer-modal.component.html',
  styles: []
})
export class AddNewAnswerModalComponent implements OnInit {
  @Input() question: Question;
  public answerForm: FormGroup;
  private selectedFile = '';
  modalRef: BsModalRef;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    class: 'modal-right'
  };


  @ViewChild('template', { static: true }) template: TemplateRef<any>;

  constructor(private modalService: BsModalService, private quizService: QuizService, private formBuilder: FormBuilder) {
    this.answerForm = this.formBuilder.group({
      value: [''],
      img: [''],
      indice: [''],
      isCorrect: [''],
    });
  }

  ngOnInit() {

  }

  show() {
    this.modalRef = this.modalService.show(this.template, this.config);
  }

  addQuiz() {
    // We retrieve here the quiz object from the quizForm and we cast the type "as Quiz".
    const answerToCreate: Answer = this.answerForm.getRawValue() as Answer;
    answerToCreate.img = this.selectedFile;
    console.log(answerToCreate.isCorrect);
    // this.quizService.addAnswer(quizToCreate);
    this.question.answers.push(answerToCreate);
    this.modalRef.hide();
  }

  onFileSelected(event) {
    console.log(event);
    console.log(this.selectedFile = event.target.files[0]);
    this.selectedFile = '/assets/img/' + event.target.files[0].name;
    console.log(this.selectedFile);
  }

}
