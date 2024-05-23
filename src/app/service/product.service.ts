import { Product } from './../../../../project/src/src/types/Product';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, delay, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [];
  searchProducts(term: string): Observable<Product[]> {
    if (!term.trim()) {
      return of(this.products).pipe(delay(300));
    }
    return of(this.products.filter(product => product.title.toLowerCase().includes(term.toLowerCase()))).pipe(delay(300));
  }
   // instance
   http = inject(HttpClient);
   apiUrl = 'http://localhost:3000/products';
 
   constructor() {}
   // getAllProducts
   getAllProducts() {
     return this.http.get<Product[]>(this.apiUrl);
   }
   // getProductDetail
   getProductDetail(id: string) {
     return this.http.get<Product>(`${this.apiUrl}/${id}`);
   }
   // createProduct
   // updateProduct
   // deleteProduct
   deleteProduct(id: number) {
     return this.http.delete(`${this.apiUrl}/${id}`);
   }
}
