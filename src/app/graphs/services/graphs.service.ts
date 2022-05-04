import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphsService {

  constructor(private httpClient:HttpClient) { }

  getSocialMediaUsers(){
    return this.httpClient.get('http://localhost:3000/grafica');
  }
  getSocialMediaUsersDoughnutData(){
    return this.httpClient.get('http://localhost:3000/grafica')
      .pipe(
        delay(1500),
        map(
          data => {
            const labels= Object.keys(data);
            const values= Object.values(data);
            return {labels,values};
          }
        )
      )
  }
}
