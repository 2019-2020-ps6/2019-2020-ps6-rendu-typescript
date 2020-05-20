import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap';
import {ModalAddComponent} from './modal-add/modal-add.component';
import {ModalGoodAnswerComponent} from './modal-good-answer/modal-good-answer.component';
import {ModalConfirmComponent} from './modal-confirm/modal-confirm.component';
import {ModalConfirmQuitComponent} from './modal-confirm-quit/modal-confirm-quit.component';
import {UserChoiceComponent} from './user-choice/user-choice.component';
import {ModalFormNotValidComponent} from './modal-form-not-valid/modal-form-not-valid.component';

@NgModule({
  declarations: [
    ModalAddComponent,
    ModalGoodAnswerComponent,
    ModalConfirmComponent,
    ModalConfirmQuitComponent,
    ModalFormNotValidComponent,
    UserChoiceComponent
  ],
  imports: [SharedModule, ModalModule.forRoot()],
  providers: [],
  entryComponents: [],
  exports: [
    ModalAddComponent,
    ModalGoodAnswerComponent,
    ModalConfirmComponent,
    ModalConfirmQuitComponent,
    ModalFormNotValidComponent,
    UserChoiceComponent
  ]
})

export class UiModalsContainersModule { }
