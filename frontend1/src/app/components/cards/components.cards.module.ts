import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RoundProgressModule,
    SharedModule
  ],
  providers: [],
  exports: [
  ]
})

export class ComponentsCardsModule { }
