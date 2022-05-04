import { Component, OnInit } from '@angular/core';
import { ChartType, ChartData,Color} from 'chart.js';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styles: [
  ]
})
export class PieComponent {
// Doughnut
public colors=['#24FB45','#DEC807','#F56E14','#DE07B8','#0820FF'];
public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
public doughnutChartData: ChartData<'doughnut'> = {
  labels: this.doughnutChartLabels,
  datasets: [
    {
      data: [ 350, 450, 100 ],
      backgroundColor: ['#24FB45','#DEC807','#F56E14','#DE07B8','#0820FF']

    }
  ]
};
public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

}
