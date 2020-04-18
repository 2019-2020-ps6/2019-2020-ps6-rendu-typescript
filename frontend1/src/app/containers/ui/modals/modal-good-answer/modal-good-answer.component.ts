import {Component, ElementRef, EmbeddedViewRef, Input, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-good-answer',
  templateUrl: './modal-good-answer.component.html',
})
export class ModalGoodAnswerComponent {
  modalRef: BsModalRef;
  message: string;

  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  constructor(private modalService: BsModalService) { }

  openModal(msg) {
    this.message = msg;
    this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog modal-dialog-centered' });
  }

  confirm(): void {
    this.message = 'Confirmed!';
    this.modalRef.hide();
  }
}
