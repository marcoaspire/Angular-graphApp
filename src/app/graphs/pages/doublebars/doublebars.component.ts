import { Component, OnInit } from '@angular/core';
import { ChartData } from 'chart.js';

@Component({
  selector: 'app-doublebars',
  templateUrl: './doublebars.component.html',
  styles: [
  ]
})
export class DoublebarsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  proveedoresData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 100,50,300,200,500 ], label: 'Vendedor A',
          backgroundColor: 'lightgreen',
          borderColor: 'green',
      },
      { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' }
    ]
  }

  productoData: ChartData<'bar'> = {
    labels: ['2021', '2022','2023','2024','2025'],
    datasets:[
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' }
    ]
  }

}
