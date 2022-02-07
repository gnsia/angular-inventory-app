import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // 전달된 Product[]
  @Input() productList!: Product[];

  // 새 Product가 선택될 때마다 현재 Product를 출력한다.
  @Output() onProductSelected!: EventEmitter<Product>;

  // 현재 선택된 `Product`가 포함된 로컬 상태
  private currentProduct!: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if(!product || !this.currentProduct) {
      return false;
    }
    return product.sku == this.currentProduct.sku;
  }

  ngOnInit(): void {
  }

}
