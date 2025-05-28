import { Component, OnInit } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { IonIcon } from '@ionic/angular';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
  standalone: true,
  imports: [
    IonicModule,   
    CommonModule,
    FormsModule
  ]
})
export class ProductDetailsPage implements OnInit {

  product: any;

  constructor(private route: ActivatedRoute, 
    private http: HttpClient,
    private location: Location
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.http.get<any[]>('assets/data/products.json').subscribe(products => {
      this.product = products.find(p => p.id === id);
    });
  }

  goBack() {
    this.location.back();  
  }
}
 