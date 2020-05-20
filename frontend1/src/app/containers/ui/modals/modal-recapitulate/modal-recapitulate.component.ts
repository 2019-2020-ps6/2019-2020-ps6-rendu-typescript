import {Component, ElementRef, EmbeddedViewRef, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-recapitulate',
  templateUrl: './modal-recapitulate.component.html',
})
export class ModalRecapitulateComponent {
  modalRef: BsModalRef;

  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  constructor(private modalService: BsModalService) { }

  openModal() {
    this.modalRef = this.modalService.show(this.template, { class: 'modal-dialog modal-dialog-centered' });
  }

  confirm(): void {
    this.modalRef.hide();
  }
}
