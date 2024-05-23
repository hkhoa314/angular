import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../../types/Product';
import { ProductService } from '../../../../service/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule, NgFor, NgIf, RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  isImageVisible = true;
  //thuoc tinh

  //thuoc tinh
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
  handleDeleteProduct(id: number | undefined): void {
    if (id) {
      if (confirm('Bạn muốn xóa sản phẩm này không?')) {
        this.productService.deleteProduct(id).subscribe(
          () => {
            this.products = this.products.filter((product) => product.id !== id);
          alert('Xóa sản phẩm thành công');
          },

          error => {
            console.error('Xóa sản phẩm không thành công:', error);
            alert("Có lỗi xảy ra khi xóa sản phẩm");
          }
        );
      }else {
        alert("Hủy bỏ thao tác xóa");
    }
    }else{ alert("Không có sản phẩm nào để xóa");

    }
  }

}
