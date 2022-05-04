import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GraphsRoutingModule } from './graphs-routing.module';
import { BarsComponent } from './pages/bars/bars.component';
import { DoublebarsComponent } from './pages/doublebars/doublebars.component';
import { PieHttpComponent } from './pages/pie-http/pie-http.component';
import { BarGraphComponent } from './components/bar-graph/bar-graph.component';
import { PieComponent } from './pages/pie/pie.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    BarsComponent,
    DoublebarsComponent,
    PieHttpComponent,
    BarGraphComponent,
    PieComponent,
  ],
  imports: [
    CommonModule,
    GraphsRoutingModule,
    NgChartsModule
  ]
})
export class GraphsModule { }
