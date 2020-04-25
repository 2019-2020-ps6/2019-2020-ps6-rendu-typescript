import { NgModule } from '@angular/core';
import { LineChartComponent } from './line-chart/line-chart.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    LineChartComponent,
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [
    LineChartComponent,
  ]
})

export class ComponentsChartModule { }
