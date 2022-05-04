import { Component, OnInit } from '@angular/core';
import { GraphsService } from '../../services/graphs.service';
import { ChartType, ChartData } from 'chart.js';

@Component({
  selector: 'app-pie-http',
  templateUrl: './pie-http.component.html',
  styles: [
  ]
})
export class PieHttpComponent implements OnInit {

    // Doughnut
  public colors=['#24FB45','#DEC807','#F56E14','#DE07B8','#0820FF'];
  public doughnutChartLabels: string[] = [
  //  'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [
        //  350, 450, 100
        ],


      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';


  constructor(private graphService:GraphsService) { }

  ngOnInit(): void {
    /*
    this.graphService.getSocialMediaUsers()
      .subscribe( data =>
        {
          console.log(data);
          const labels= Object.keys(data);
          const values= Object.values(data);
          this.doughnutChartData={
            labels:labels,
            datasets:[{data:values}]
          }
        }
      )
      */

      this.graphService.getSocialMediaUsersDoughnutData()
      .subscribe(
        ({labels, values}) => {
          this.doughnutChartData={
            labels:labels,
            datasets:[{data:values}]
          }
        }
      );

  }

}
