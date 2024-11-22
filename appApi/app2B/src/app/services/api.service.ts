import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://dog.ceo/api/breed/Affenpinsher/images/random';
  constructor(private http: HttpClient) { 
    getPokemon(name: string): Observable<any> {
      return this.http.get<any>(`${this.baseUrl}${name}`);
  }
}
