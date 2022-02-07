import { Component, HostBinding, Input } from '@angular/core';
import { Product } from '../product.model';

// 제품 하나를 보여주는 컴포넌트

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {
  @Input() product!: Product;
  @HostBinding('attr.class') cssClass = 'item';
}
