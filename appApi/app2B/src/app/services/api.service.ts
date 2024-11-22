import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private dogUrl = 'https://dog.ceo/api/breed/affenpinscher/images/random';
  private robotUrl = 'https://robohash.org';

  constructor(private http: HttpClient) {}

  getRandomDogImage(): Observable<any> {
    return this.http.get<any>(this.dogUrl);
  }

  getRandomRobotImage(identifier: string): Observable<Blob> {
    return this.http.get(`${this.robotUrl}/${identifier}`, { responseType: 'blob' });
  }
}
