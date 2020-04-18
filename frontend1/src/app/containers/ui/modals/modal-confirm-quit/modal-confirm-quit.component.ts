import {Component, ElementRef, EmbeddedViewRef, TemplateRef, ViewChild} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-modal-confirm-quit',
  templateUrl: './modal-confirm-quit.component.html',
})
export class ModalConfirmQuitComponent {
  modalRef: BsModalRef;
  message: string;

  @ViewChild('template', { static: true }) template: TemplateRef<any>;
  constructor(private modalService: BsModalService, private router: Router) { }

  openModal() {
    this.modalRef = this.modalService.show(this.template,{ class: 'modal-dialog modal-dialog-centered' });
  }

  confirm(): void {
    this.router.navigate(['/app/pages/quiz/quiz-list/']);
    this.modalRef.hide();
  }

  decline() {
    this.modalRef.hide();
  }
}
