import { Component, OnInit } from '@angular/core';

interface MenuItem{
  path: string;
  text: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
    `
      li{
        cursor:pointer;
      }
    `
  ]
})
export class MenuComponent {
  menu: MenuItem[] = [
    { path: 'graphs/bar', text: 'Bar' },
    { path: 'graphs/double-bar', text: 'Double Bar' },
    { path: 'graphs/pie', text: 'Pie' },
    { path: 'graphs/pie-http', text: 'Pie Http' }

  ];

  constructor() { }


}
