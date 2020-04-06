import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { QuizListComponent} from './quiz-list/quiz-list.component';
import { DetailsComponent } from './details/details.component';
import { QuizRoutingModule } from './quiz.routing';
import { QuizComponent } from './quiz.component';
import { DetailsAltComponent } from './details-alt/details-alt.component';
import { ComponentsCarouselModule } from 'src/app/components/carousel/components.carousel.module';
import { PagesContainersModule } from 'src/app/containers/pages/pages.containers.module';
import { HotkeyModule } from 'angular2-hotkeys';
import { ComponentsCardsModule } from 'src/app/components/cards/components.cards.module';
import { ComponentsChartModule } from 'src/app/components/charts/components.charts.module';
import { RatingModule, PaginationModule, TabsModule, ModalModule, BsDropdownModule, AccordionModule } from 'ngx-bootstrap';
import { FormsModule as FormsModuleAngular, ReactiveFormsModule } from '@angular/forms';
import { LayoutContainersModule } from 'src/app/containers/layout/layout.containers.module';
import { ContextMenuModule } from 'ngx-contextmenu';
import {QuestionListComponent} from './question-list/question-list.component';

@NgModule({
  declarations: [ DetailsComponent, QuizListComponent, QuizComponent, DetailsAltComponent, QuestionListComponent],
  imports: [
    SharedModule,
    QuizRoutingModule,
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
    })
  ]
})
export class QuizModule { }
