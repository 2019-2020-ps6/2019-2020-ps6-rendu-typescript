import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import {QuizListComponent} from "./quizzes/quiz-list/quiz-list.component";
import {QuizComponent} from "./quizzes/quiz/quiz.component";
import {QuizFormComponent} from "./quizzes/quiz-form/quiz-form.component";
import {QuestionListComponent} from "./questions/question-list/question-list.component";
import {QuestionFormComponent} from "./questions/question-form/question-form.component";
import {QuestionComponent} from "./questions/question/question.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContextMenuModule} from "ngx-contextmenu";
import {PagesContainersModule} from "./containers/pages/pages.containers.module";
import {PaginationModule} from "ngx-bootstrap";
import {AnswerListComponent} from "./views/app/pages/quiz/Answer-list/answer-list";

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    ContextMenuModule,
    PagesContainersModule,
    PaginationModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    QuizListComponent,
    QuizComponent,
    QuizFormComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionComponent,
    AnswerListComponent
  ],
  providers: [],
  exports: [
    QuestionListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
