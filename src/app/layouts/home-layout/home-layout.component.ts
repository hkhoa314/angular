import { Component, inject } from '@angular/core';
import { Product } from '../../../types/Product';
import { ProductService } from '../../service/product.service';
import { NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './home-layout.component.html',
  styleUrl: './home-layout.component.css'
})
export class HomeLayoutComponent {
  products: Product[] = [];
  

  productService = inject(ProductService);

  // ngOnInit
  ngOnInit() {
    this.productService.getAllProducts().subscribe({
      next: (products) => {
        this.products = products;
      },
      error: (error) => {
        // show error
        console.error(error.message);
      },
    });
  }

}
