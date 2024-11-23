import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private robohashUrl = 'https://robohash.org/%22aqui';
  private dogUrl = 'https://dog.ceo/api/breed/affenpinscher/images/random';
  private gutendexUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';

  constructor(private http: HttpClient) { }

  getRobohash(): Observable<any> {
    return this.http.get(this.robohashUrl);
  }

  getDogImage(): Observable<any> {
    return this.http.get(this.dogUrl);
  }

  getBooks(): Observable<any> {
    return this.http.get(this.gutendexUrl);
  }
}
