import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ViewsModule } from './views/views.module';
import { TranslateModule } from '@ngx-translate/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LayoutContainersModule } from './containers/layout/layout.containers.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContextMenuModule} from 'ngx-contextmenu';
import {PagesContainersModule} from './containers/pages/pages.containers.module';
import {PaginationModule} from 'ngx-bootstrap';
import {AnswerListComponent} from './views/app/pages/quiz/answer-list/answer-list';

@NgModule({
  imports: [
    BrowserModule,
    ViewsModule,
    AppRoutingModule,
    LayoutContainersModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    ContextMenuModule,
    PagesContainersModule,
    PaginationModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AnswerListComponent,
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
