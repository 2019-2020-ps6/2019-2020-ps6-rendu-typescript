import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { ViewRoutingModule } from './views.routing';
import { SharedModule } from '../shared/shared.module';
import {GameComponent} from './game/game.component';
import {UiModalsContainersModule} from '../containers/ui/modals/ui.modals.containers.module';
import {CongragulationComponent} from './congragulation/congragulation.component';

@NgModule({
  declarations: [ViewsComponent, GameComponent, CongragulationComponent],
    imports: [
        CommonModule,
        ViewRoutingModule,
        SharedModule,
        UiModalsContainersModule,
    ]
})
export class ViewsModule { }
