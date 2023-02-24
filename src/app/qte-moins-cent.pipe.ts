//import { HttpClient } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'qteMoinsCent'
})
export class QteMoinsCentPipe implements PipeTransform {

  //constructor(private http: HttpClient) {}

  transform(forfaits: Forfait[]): Forfait[] {
    return forfaits.filter(forfait => forfait.prix < 100);
  }

}
