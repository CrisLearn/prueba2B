import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.page.html',
  styleUrls: ['./consumo-api.page.scss'],
})
export class ConsumoApiPage implements OnInit {
  elements: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getBooks().subscribe(booksData => {
      const books = booksData.results;
      books.forEach((book: any, index: number) => {
        if (index % 2 === 0) {
          this.apiService.getDogImage().subscribe(dogData => {
            this.elements.push({ title: book.title, image: dogData.message });
          });
        } else {
          this.apiService.getRobotImage().subscribe(robotData => {
            this.elements.push({ title: book.title, image: robotData });
          });
        } 
      });
    });
  }
}
