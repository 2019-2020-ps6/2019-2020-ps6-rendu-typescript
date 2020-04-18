import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import {ModalAddComponent} from './modal-add/modal-add.component';
import {ModalGoodAnswerComponent} from './modal-good-answer/modal-good-answer.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {ModalConfirmQuitComponent} from './modal-confirm-quit/modal-confirm-quit.component';

@NgModule({
  declarations: [
    ModalAddComponent,
    ModalGoodAnswerComponent,
    ModalConfirmComponent,
    ModalConfirmQuitComponent
  ],
  imports: [SharedModule, ModalModule.forRoot()],
  providers: [],
  entryComponents: [],
  exports: [
    ModalAddComponent,
    ModalGoodAnswerComponent,
    ModalConfirmComponent,
    ModalConfirmQuitComponent
  ]
})

export class UiModalsContainersModule { }
