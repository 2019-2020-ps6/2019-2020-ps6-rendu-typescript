import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { DetailsComponent } from './details/details.component';
import { DetailsAltComponent } from './details-alt/details-alt.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {GameComponent} from 'src/app/views/app/pages/quiz/game/game/game.component';


const routes: Routes = [
  {
    path: '', component: QuizComponent,
    children: [
      { path: '', redirectTo: 'quiz-list', pathMatch: 'full' },
      { path: 'quiz-list', component: QuizListComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'details-alt', component: DetailsAltComponent },
      { path: 'question-list/:id', component: QuestionListComponent},
      {path: 'game/:id', component: GameComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
