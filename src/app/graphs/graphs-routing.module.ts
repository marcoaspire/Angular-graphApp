import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarsComponent } from './pages/bars/bars.component';
import { PieHttpComponent } from './pages/pie-http/pie-http.component';
import { DoublebarsComponent } from './pages/doublebars/doublebars.component';
import { PieComponent } from './pages/pie/pie.component';

const routes: Routes = [
  {

    path:'',
    children:[
      {
        path:'bar',
        component:BarsComponent
      },
      {
        path:'double-bar',
        component:DoublebarsComponent
      },
      {
        path:'pie-http',
        component:PieHttpComponent
      },
      {
        path:'pie',
        component:PieComponent
      },
      {
        path:'**',
        redirectTo:'bar'
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraphsRoutingModule { }
