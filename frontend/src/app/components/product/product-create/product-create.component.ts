import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigationToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }

}
