import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuestionListComponent} from './question-list/question-list.component';


const routes: Routes = [
  {
    path: '', component: QuizComponent,
    children: [
      { path: '', redirectTo: 'quiz-list', pathMatch: 'full' },
      { path: 'quiz-list', component: QuizListComponent },
      { path: 'question-list/:id', component: QuestionListComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
