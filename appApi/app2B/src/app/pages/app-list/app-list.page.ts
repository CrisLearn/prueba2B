import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.page.html',
  styleUrls: ['./app-list.page.scss'],
})
export class AppListPage implements OnInit {
  bookList: { title: string; image: string }[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadBooks();
  }

  // Obtener libros de la API de Gutendex y combinar con imágenes
  loadBooks() {
    this.bookList = []; // Vaciar la lista de libros antes de llenarla

    // Obtener los libros desde la API de Gutendex
    this.apiService.getBooks().subscribe((response) => {
      const books = response.results;

      // Para cada libro, obtener la imagen (perrito o robot)
      books.forEach((book: { title: any; }, index: any) => {
        const isDogImage = Math.random() > 0.5; // Decide aleatoriamente entre perro o robot
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
}
