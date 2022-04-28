import { Component, Input, OnInit } from '@angular/core';
import { CheaperProduct } from '../models/cheaper-product';
import { PurchaseService } from '../services/purchase.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-home-products',
  templateUrl: './home-products.component.html',
  styleUrls: ['./home-products.component.css']
})
export class HomeProductsComponent implements OnInit {


  @Input() cheaperProducts: CheaperProduct[] = [];

  constructor(
    public stockService: StockService,
    public purchasesService: PurchaseService
  ) { }

  ngOnInit(): void {
  
  }
 

}
