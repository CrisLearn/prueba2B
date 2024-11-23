import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private booksUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogUrl = 'https://dog.ceo/api/breed/affenpinscher/images/random';
  private robohashUrl = 'https://robohash.org/aqui';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<any> {
    return this.http.get(this.booksUrl);
  }

  getDogImage(): Observable<any> {
    return this.http.get(this.dogUrl);
  }

  getRobotImage(): Observable<any> {
    return this.http.get(this.robohashUrl, { responseType: 'text' }); // Asegurarse que retorna un Observable
  }
}
