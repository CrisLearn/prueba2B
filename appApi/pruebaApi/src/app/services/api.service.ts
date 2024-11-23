import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, DocumentReference, DocumentData } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private booksUrl = 'https://gutendex.com/books?ids=1,2,3,4,5,6,7,8,9,10';
  private dogUrl = 'https://dog.ceo/api/breed/affenpinscher/images/random';
  private robohashUrl = 'https://robohash.org/';

  constructor(private http: HttpClient, private firestore: AngularFirestore) {}

  getBooks(): Observable<any> {
    return this.http.get(this.booksUrl);
  }

  getDogImage(): Observable<any> {
    return this.http.get(this.dogUrl);
  }

  getRobotImage(identifier: string): string {
    return `${this.robohashUrl}${identifier}`;
  }

  saveToFirebase(title: string, imageUrl: string): Promise<DocumentReference<DocumentData>> {
    return this.firestore.collection<DocumentData>('books').add({ title, imageUrl });
  }
  
}
