import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,
    children: [
      { path: '', redirectTo: 'quiz', pathMatch: 'full' },
      { path: 'quiz', loadChildren: () => import('./quiz/quiz.module').then(m => m.QuizModule)}
    ]
  }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }



