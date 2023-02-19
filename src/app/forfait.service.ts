import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Forfait } from './forfait';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({
  providedIn: 'root'
})
export class ForfaitService {
  updateForfait(forfait: Forfait) {
    throw new Error('Method not implemented.');
  }
  API_URL = 'http://localhost/api-forfaits/';

  constructor(private http: HttpClient) { }

  getForfaits(): Observable<Forfait[]> {
    return this.http.get<Forfait[]>(this.API_URL);
  }

  addForfait(forfait:Forfait): Observable<void> {
    return this.http.post<void>(this.API_URL, forfait, httpOptions);
  }

  deleteForfait(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }
}
