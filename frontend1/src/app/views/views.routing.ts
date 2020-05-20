import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewsComponent } from './views.component';
import { ErrorComponent } from './error/error.component';
import { environment } from './../../environments/environment';
import {GameComponent} from './game/game.component';
import {CongratulationsComponent} from './congratulations/congratulations.component';
import {RecapitulateComponent} from "./recapitulate/recapitulate.component";


let routes: Routes = [
  {
    path: '',
    component: ViewsComponent,
    pathMatch: 'full',
  },
  { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
  { path: 'error', component: ErrorComponent },
  { path: 'game/:quizId/:userId', component: GameComponent},
  { path: 'congratulations/:quizId/:userId', component: CongratulationsComponent},
  { path: 'recapitulate/:quizId/:userId', component: RecapitulateComponent},
  { path: '**', redirectTo: '/error' }
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      component: ViewsComponent,
      pathMatch: 'full',
    },
    { path: 'app', loadChildren: () => import('./app/app.module').then(m => m.AppModule) },
    { path: 'error', component: ErrorComponent },
    { path: '**', redirectTo: '/error' }
  ];
}
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
