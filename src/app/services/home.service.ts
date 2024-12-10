import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from '../interface/home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private api = '../../..//public/databases/data.json';
  constructor(private http: HttpClient) {}

  getData(): Observable<Home[]> {
    return this.http.get<Home[]>(this.api);
  }
}
