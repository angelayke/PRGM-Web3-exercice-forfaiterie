import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  API_URL = 'http://localhost/api-forfaits';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.API_URL);
  }
}
