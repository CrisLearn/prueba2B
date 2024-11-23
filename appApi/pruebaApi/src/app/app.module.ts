import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Add this constant for Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAhoofBl1c9nmH5wa0dcQSIPPuwfumQtdI",
  authDomain: "b-2bff7.firebaseapp.com",
  projectId: "b-2bff7",
  storageBucket: "b-2bff7.appspot.com",
  messagingSenderId: "1045510192311",
  appId: "1:1045510192311:web:d5200b57294dbb7fe0e132",
  measurementId: "G-M6LJ6CL8DY"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig), // Use the constant directly
    AngularFirestoreModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}