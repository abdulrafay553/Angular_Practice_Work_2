import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrl: './items.component.css',
})
export class ItemsComponent {
  allProducts: any = [];

  constructor(private data: ProductsService) {
    this.data.getProducts().subscribe((prdData) => {
      console.warn(prdData);
      this.allProducts = prdData;
    });
  }
}
