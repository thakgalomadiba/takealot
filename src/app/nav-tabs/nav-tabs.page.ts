import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.page.html',
  styleUrls: ['./nav-tabs.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ]
})
export class NavTabsPage implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];  

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Product[]>('assets/data/products.json').subscribe(data => {
      this.products = data;
    });

    this.http.get<{ categories: Category[] }>('assets/data/categories.json').subscribe(data => {
      this.categories = data.categories;
    });
  }
}



interface Category {
  id: number;
  name: string;
}
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}