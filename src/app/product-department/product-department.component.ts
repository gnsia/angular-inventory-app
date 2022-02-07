import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

// 제품 분류에 해당하는 브레드 크럼을 보여주는 컴포넌트

@Component({
  selector: 'product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent {
  @Input() product!: Product;
}
