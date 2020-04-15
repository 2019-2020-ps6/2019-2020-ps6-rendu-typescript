import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuestionListComponent} from './question-list/question-list.component';
import {GameComponent} from 'src/app/views/app/pages/quiz/game/game/game.component';
import {AnswerListComponent} from './answer-list/answer-list';


const routes: Routes = [
  {
    path: '', component: QuizComponent,
    children: [
      { path: '', redirectTo: 'quiz-list', pathMatch: 'full' },
      { path: 'quiz-list', component: QuizListComponent },
      { path: 'question-list/:quizId', component: QuestionListComponent},
      { path: 'answer-list/:quizId/:questionId', component: AnswerListComponent},
      {path: 'game/:quizId', component: GameComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
