import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule, RouterModule]
})
export class HomePage implements OnInit {

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

    this.http.get<Product[]>('assets/data/products.json').subscribe(data => {
      this.products = data;
    });
  }

}


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}