import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { ImageListComponent } from './image-list/image-list.component';
import { DetailsComponent } from './details/details.component';
import { DetailsAltComponent } from './details-alt/details-alt.component';

const routes: Routes = [
  {
    path: '', component: QuizComponent,
    children: [
      { path: '', redirectTo: 'details-alt', pathMatch: 'full' },
      { path: 'image-list', component: ImageListComponent },
      { path: 'details', component: DetailsComponent },
      { path: 'details-alt', component: DetailsAltComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizRoutingModule { }
