import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizListComponent} from './quiz-list/quiz-list.component';
import { ComponentsRoutingModule } from './components.routing';
import { ComponentsComponent } from './components.component';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { HotkeyModule } from 'angular2-hotkeys';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import {RatingModule, PaginationModule, TabsModule, ModalModule, BsDropdownModule, AccordionModule, AlertComponent} from 'ngx-bootstrap';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import {QuestionListComponent} from './question-list/question-list.component';
import {UiModalsContainersModule} from '../../../../containers/ui/modals/ui.modals.containers.module';
import { UserComponent } from './user/user.component';
import {EvolutionComponent} from './evolution/evolution.component';


@NgModule({
  declarations: [ QuizListComponent, ComponentsComponent, QuestionListComponent, UserComponent, EvolutionComponent],
    imports: [
        SharedModule,
        ComponentsRoutingModule,
        ComponentsCarouselModule,
        LayoutContainersModule,
        PagesContainersModule,
        ComponentsCardsModule,
        ComponentsChartModule,
        RatingModule,
        FormsModuleAngular,
        ReactiveFormsModule,
        HotkeyModule.forRoot(),
        PaginationModule.forRoot(),
        TabsModule.forRoot(),
        ModalModule.forRoot(),
        BsDropdownModule.forRoot(),
        AccordionModule.forRoot(),
        ContextMenuModule.forRoot({
            useBootstrap4: true,
        }),
        UiModalsContainersModule
    ]
})
export class ComponentsModule { }
