import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import {GameComponent} from './game/game.component';
import {QuestionComponent} from './question/question.component';
import {AnswerComponent} from './answer/answer.component';

@NgModule({
  declarations: [ViewsComponent, QuestionComponent, GameComponent, AnswerComponent],
  imports: [
    CommonModule,
    ViewRoutingModule,
    SharedModule,
  ]
})
export class ViewsModule { }
