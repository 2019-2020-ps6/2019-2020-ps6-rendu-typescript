import { Injectable } from '@angular/core';
import { Colors } from '../../constants/colors.service';

@Injectable({ providedIn: 'root' })
export class ChartService {

  private _chartTooltip = {
    backgroundColor: Colors.getColors().foregroundColor,
    titleFontColor: Colors.getColors().primaryColor,
    borderColor: Colors.getColors().separatorColor,
    borderWidth: 0.5,
    bodyFontColor: Colors.getColors().primaryColor,
    bodySpacing: 10,
    xPadding: 15,
    yPadding: 15,
    cornerRadius: 0.15
  };

  public get chartTooltip() {
    return this._chartTooltip;
  }

  private _lineChartOptions = {
    legend: {
      display: false
    },
    responsive: true,
    maintainAspectRatio: false,
    tooltips: this.chartTooltip,
    plugins: {
      datalabels: {
        display: false
      }
    },
    scales: {
      yAxes: [
        {
          gridLines: {
            display: false,
            lineWidth: 1,
            color: 'rgba(0,0,0,0.1)',
            drawBorder: false
          },
          ticks: {
            beginAtZero: true,
            stepSize: 20,
            min: 0,
            max: 100,
            padding: 30
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false
          }
        }
      ]
    }
  };

  public get lineChartOptions() {
    return this._lineChartOptions;
  }

}
