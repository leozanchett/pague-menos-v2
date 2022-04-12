import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { NavigateService } from '../services/navigate.service';
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
    public navigateService: NavigateService
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    console.log(this.product);
    console.log(JSON.stringify(this.product));
    this.productService.postProduct(this.product);
  }

}
