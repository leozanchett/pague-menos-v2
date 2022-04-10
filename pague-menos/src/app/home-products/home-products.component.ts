import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {


  @Input() products: Product[] = [];

  constructor(
    public stockService: StockService
  ) { }

  ngOnInit(): void {
  
  }

}
