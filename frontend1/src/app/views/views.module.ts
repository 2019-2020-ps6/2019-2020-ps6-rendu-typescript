import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import {GameComponent} from './game/game.component';
import {UiModalsContainersModule} from '../containers/ui/modals/ui.modals.containers.module';
import {CongratulationsComponent} from './congratulations/congratulations.component';
import {LayoutContainersModule} from "../containers/layout/layout.containers.module";
import {RecapitulateComponent} from "./recapitulate/recapitulate.component";

@NgModule({
  declarations: [ViewsComponent, GameComponent, CongratulationsComponent, RecapitulateComponent],
    imports: [
        CommonModule,
        ViewRoutingModule,
        SharedModule,
        UiModalsContainersModule,
        LayoutContainersModule,
    ]
})
export class ViewsModule { }
