import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentPostComponent } from './recent-post/recent-post.component';
import { PostComponent } from './post/post.component';
import { ComponentsPlayerModule } from './../player/components.player.module';

@NgModule({
  declarations: [
  RecentPostComponent,
  PostComponent
],
  imports: [
    CommonModule,
    ComponentsPlayerModule
  ],
  providers: [],
  exports: [
    RecentPostComponent,
    PostComponent
  ]
})

export class ComponentsPagesModule { }
