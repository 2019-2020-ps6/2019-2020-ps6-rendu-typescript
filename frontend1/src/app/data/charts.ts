import { Colors } from '../constants/colors.service';
export const lineChartData = {
  labels: [],
  datasets: [
    {
      label: '',
      data: [],
      borderColor: Colors.getColors().themeColor1,
      pointBackgroundColor: Colors.getColors().foregroundColor,
      pointBorderColor: Colors.getColors().themeColor1,
      pointHoverBackgroundColor: Colors.getColors().themeColor1,
      pointHoverBorderColor: Colors.getColors().foregroundColor,
      pointRadius: 4,
      pointBorderWidth: 2,
      pointHoverRadius: 6,
      borderWidth: 2,
      fill: false
    }
  ]
};




