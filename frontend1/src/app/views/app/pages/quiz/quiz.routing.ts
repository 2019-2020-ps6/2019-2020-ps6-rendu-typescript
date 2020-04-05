import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ImageListComponent } from './image-list/image-list.component';
import { DetailsComponent } from './details/details.component';
import { DetailsAltComponent } from './details-alt/details-alt.component';
import {QuizListComponent} from '../../../../quizzes/quiz-list/quiz-list.component';
import {QuestionComponent} from '../../../../questions/question/question.component';

const routes: Routes = [
  {
    path: '', component: QuizComponent,
    children: [
      { path: '', redirectTo: 'image-list', pathMatch: 'full' },
      { path: 'image-list', component: ImageListComponent },
      { path: ':id', component: QuestionComponent },
      { path: 'details-alt', component: DetailsAltComponent },
      /*{path: '', redirectTo: 'image-list', pathMatch: 'full'},
      {path: 'image-list',component: QuizListComponent},
      { path: 'details', component: DetailsComponent },
      { path: 'details-alt', component: DetailsAltComponent }*/
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
