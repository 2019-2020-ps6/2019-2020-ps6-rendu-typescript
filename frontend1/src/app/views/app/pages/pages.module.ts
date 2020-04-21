import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages.routing';
import {TranslateModule} from '@ngx-translate/core';
import {PagesContainersModule} from '../../../containers/pages/pages.containers.module';
import {UiModalsContainersModule} from '../../../containers/ui/modals/ui.modals.containers.module';
import {ContextMenuModule} from 'ngx-contextmenu';
import {BootstrapModule} from '../../../components/bootstrap/bootstrap.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    PagesContainersModule,
    UiModalsContainersModule,
    ContextMenuModule,
    BootstrapModule,
    FormsModule
  ]
})
export class PagesModule { }
