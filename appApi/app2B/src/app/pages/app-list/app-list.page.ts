import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.page.html',
  styleUrls: ['./app-list.page.scss'],
})
export class AppListPage implements OnInit {
  bookList: { title: string; image: string }[] = []; 
  bookTitles = [
    'El Señor de los Anillos',
    'Cien Años de Soledad',
    'Don Quijote de la Mancha',
    'Yo Robot',
    'Alicia en el Pais de las Maravillas',
    'Matar a un Ruiseñor',
    'La Odisea',
    'Orgullo y Prejuicio',
    'Don Juan Tenorio',
    'El Gran Gatsby',
  ];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadBooks(); 
  }

  loadBooks() {
    this.bookList = []; 
    this.bookTitles.forEach((title, index) => {
      const isDogImage = Math.random() > 0.5; 
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
  }
}
