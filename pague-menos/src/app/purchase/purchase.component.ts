import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {

  
  product = {} as Product;

  constructor(
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.product);
    console.log(JSON.stringify(this.product));
    this.productService.postProduct(this.product);
  }

  backHome(): void {
    this.router.navigate(['/home']); 
  }

}
