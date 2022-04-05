import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {


  @Input() products: Product[] = [];

  constructor(
    private prodService: ProductsService
  ) { }

  ngOnInit(): void {
  
  }

}
