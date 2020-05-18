import {Component, ElementRef, EmbeddedViewRef, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-form-not-valid',
  templateUrl: './modal-form-not-valid.component.html',
})
export class ModalFormNotValidComponent {
  modalRef: BsModalRef;
  message: string;

  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  constructor(private modalService: BsModalService) { }

  openModal() {
    this.message = 'VEUILLEZ REMPLIR TOUS LES CHAMPS DU FORMULAIRE !!! ';
    this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog modal-dialog-centered' });
  }

  openModalWithMessage(message) {
    this.message = message;
    this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog modal-dialog-centered' });
  }

  confirm(): void {
    this.modalRef.hide();
  }
}
