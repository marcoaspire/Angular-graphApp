import { Component, Input, OnInit,ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-bar-graph',
  templateUrl: './bar-graph.component.html',
  styles: [
  ]
})
export class BarGraphComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  @Input()line:Boolean = false;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';


  @Input() productoData: ChartData<'bar'> = {
    labels: [
    //  '2021', '2022','2023','2024','2025'
    ],
    datasets:[
      //{ data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  }

  @Input() public barChartData: ChartData<'bar'> = {
    labels: [
      //'2021', '2022','2023','2024','2025'
    ],
    datasets: [
      //{ data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
      //{ data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },

    ]
  };
  constructor() { }

  ngOnInit(): void {
    if (this.line){
      this.barChartType='line';
    }
  }

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }
  public randomize(): void {
    // Only Change 3 values
    //serie A
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }

}
