import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.page.html',
  styleUrls: ['./app-list.page.scss'],
})
export class AppListPage implements OnInit {
  bookList: { title: string; image: string }[] = [];

  constructor(private apiService: ApiService, private firestore: Firestore) {}

  ngOnInit() {
    this.loadBooks();
  }


  loadBooks() {
    this.bookList = []; 

   
    this.apiService.getBooks().subscribe((response) => {
      const books = response.results;

     
      books.forEach((book: { title: any; }, index: any) => {
        const isDogImage = Math.random() > 0.5; 
        const title = book.title;

        if (isDogImage) {
          this.apiService.getRandomDogImage().subscribe((response) => {
            this.bookList.push({ title, image: response.message });
          });
        } else {
          this.apiService.getRandomRobotImage(`robot${index}`).subscribe((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            this.bookList.push({ title, image: imageUrl });
          });
        }
      });
    });
  }


  saveBook(book: { title: string; image: string }) {
    const booksCollection = collection(this.firestore, 'books');
    addDoc(booksCollection, book).then(() => {
      console.log('Book added to Firestore');
    }).catch((error) => {
      console.error('Error adding book: ', error);
    });
  }
}
