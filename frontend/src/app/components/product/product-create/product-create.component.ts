import { Product } from './../product.module';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { ProductService } from './../product.service';
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null
  }

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    
  }
  
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado')
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}
