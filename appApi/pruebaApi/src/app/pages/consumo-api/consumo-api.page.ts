import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-consumo-api',
  templateUrl: './consumo-api.page.html',
  styleUrls: ['./consumo-api.page.scss'],
})
export class ConsumoApiPage implements OnInit {
  elements: any[] = [];

  constructor(private apiService: ApiService, private toastController: ToastController) {}

  ngOnInit() {
    this.apiService.getBooks().subscribe(booksData => {
      const books = booksData.results;
      books.forEach((book: any, index: number) => {
        if (index % 2 === 0) {
          // Obtener imagen de perro
          this.apiService.getDogImage().subscribe(dogData => {
            this.elements.push({ title: book.title, image: dogData.message });
          });
        } else {
          const robotImageUrl = this.apiService.getRobotImage(`book-${book.id}`);
          this.elements.push({ title: book.title, image: robotImageUrl });
        }
      });
    });
  }

  async saveElement(element: any) {
    this.apiService.saveToFirebase(element.title, element.image)
      .then(async () => {
        const toast = await this.toastController.create({
          message: 'Guardado correctamente en Firebase',
          duration: 2000,
          position: 'top'
        });
        await toast.present();
      })
      .catch(err => {
        console.error('Error al guardar en Firebase', err);
      });
  }
}
