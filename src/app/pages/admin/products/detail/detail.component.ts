import { NgIf } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { Product } from '../../../../../types/Product';
import { ProductService } from '../../../../service/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf,],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent  implements OnInit {
  product: Product | undefined;
  productId!: string;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = params['id'];
      this.getProduct(this.productId);
    });
  }

  getProduct(id: string): void {
    this.productService.getProductDetail(id).subscribe(
      (data: Product) => {
        this.product = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }
}
