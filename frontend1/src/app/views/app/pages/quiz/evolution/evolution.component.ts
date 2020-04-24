import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Hotkey, HotkeysService} from 'angular2-hotkeys';
import {ApiService} from '../../../../../data/api.service';
import {Router} from '@angular/router';
import {User} from '../../../../../../models/user.model';
import {UserService} from '../../../../../../services/user.service';
import {ContextMenuComponent} from 'ngx-contextmenu';
import {AddNewQuizModalComponent} from '../../../../../containers/pages/add-new-quiz-modal/add-new-quiz-modal.component';
import {AddNewUserModalComponent} from '../../../../../containers/pages/add-new-user-modal/add-new-user-modal.component';
import {ChartService} from '../../../../../components/charts/chart.service';
import { lineChartData } from '../../../../../data/charts';
import {Colors} from '../../../../../constants/colors.service';

@Component({
  selector: 'app-evolution',
  templateUrl: './evolution.component.html',
})
export class EvolutionComponent implements OnInit{
  @Input() user: User;
  chartDataConfig: ChartService;
  lineChartData = lineChartData;

  @ViewChild('basicMenu') public basicMenu: ContextMenuComponent;
  @ViewChild('addNewModalRef', { static: true }) addNewModalRef: AddNewUserModalComponent;

  constructor( private chartService: ChartService) {
    this.chartDataConfig = this.chartService;
  }

  ngOnInit(): void {
    this.loadChartData();
  }

  loadChartData() {
    const labels: string[] = [];
    const data: number[] = [];
    this.user.scores.forEach(score => {
      labels.push(score.date);
      data.push(+score.value);
    });
    this.lineChartData.labels = labels;
    this.lineChartData.datasets[0].data = data;
  }

}
