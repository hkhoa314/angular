import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ListComponent } from '../../pages/admin/products/list/list.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Product } from '../../../types/Product';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [FormsModule,NgFor,NgIf,ListComponent,SidebarComponent],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.css'
})
export class AdminLayoutComponent implements OnInit {
  products$!: Observable<Product[]>;
  private searchTerms = new Subject<string>();

  constructor(private productService: ProductService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.products$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.productService.searchProducts(term)),
    );
  }
}
