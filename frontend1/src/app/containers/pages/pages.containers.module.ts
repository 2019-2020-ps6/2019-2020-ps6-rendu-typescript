import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollapseModule, RatingModule, TabsModule, AccordionModule, BsDropdownModule } from 'ngx-bootstrap';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LightboxModule } from 'ngx-lightbox';
import { SharedModule } from 'src/app/shared/shared.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { AddNewQuizModalComponent } from './add-new-quiz-modal/add-new-quiz-modal.component';
import { ListPageQuizzesHeaderComponent } from './list-page-quizzes-header/list-page-quizzes-header.component';
import { ComponentsPagesModule } from '../../components/pages/components.pages.module';
import { ComponentsCardsModule } from '../../components/cards/components.cards.module';
import { FeatureComparisonComponent } from './feature-comparison/feature-comparison.component';
import { ComponentsPlayerModule } from 'src/app/components/player/components.player.module';
import { LayoutContainersModule } from '../layout/layout.containers.module';
import { QuizDetailInfoAltComponent } from './quiz-detail-info-alt/quiz-detail-info-alt.component';
import { QuizDetailOrdersComponent } from './quiz-detail-orders/quiz-detail-orders.component';
import { QuizDetailCommentsComponent } from './quiz-detail-comments/quiz-detail-comments.component';
import { QuizDetailInfoComponent } from './quiz-detail-info/quiz-detail-info.component';
import { QuizDetailTabsComponent } from './quiz-detail-tabs/quiz-detail-tabs.component';
import {AddNewQuestionModalComponent} from './add-new-question-modal/add-new-question-modal.component';
import {AddNewAnswerModalComponent} from './add-new-answer-modal/add-new-answer-modal.component';
import {UiModalsContainersModule} from '../ui/modals/ui.modals.containers.module';
import {AddNewUserModalComponent} from './add-new-user-modal/add-new-user-modal.component';
import {ListPageUsersHeaderComponent} from "./list-page-users-header/list-page-users-header.component";

@NgModule({
  declarations: [
    AddNewQuizModalComponent,
    ListPageQuizzesHeaderComponent,
    FeatureComparisonComponent,
    QuizDetailInfoAltComponent,
    QuizDetailOrdersComponent,
    QuizDetailCommentsComponent,
    QuizDetailInfoComponent,
    QuizDetailTabsComponent,
    AddNewQuestionModalComponent,
    AddNewAnswerModalComponent,
    AddNewUserModalComponent,
    ListPageUsersHeaderComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule,
        CollapseModule,
        FormsModule,
        LayoutContainersModule,
        NgSelectModule,
        LightboxModule,
        ComponentsPagesModule,
        ComponentsCardsModule,
        ComponentsPlayerModule,
        RatingModule.forRoot(),
        TabsModule.forRoot(),
        AccordionModule.forRoot(),
        BsDropdownModule.forRoot(),
        ReactiveFormsModule,
        UiModalsContainersModule
    ],
  exports: [
    AddNewQuizModalComponent,
    ListPageQuizzesHeaderComponent,
    FeatureComparisonComponent,
    QuizDetailInfoAltComponent,
    QuizDetailOrdersComponent,
    QuizDetailCommentsComponent,
    QuizDetailInfoComponent,
    QuizDetailTabsComponent,
    AddNewQuestionModalComponent,
    AddNewAnswerModalComponent,
    AddNewUserModalComponent,
    ListPageUsersHeaderComponent
  ]
})
export class PagesContainersModule { }
