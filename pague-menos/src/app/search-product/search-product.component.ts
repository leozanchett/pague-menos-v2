import { Component, OnInit } from '@angular/core';
import { CheaperProduct } from '../models/cheaper-product';
import { CheaperProductsService } from '../services/cheaper-product.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  cheaperProduct = {} as CheaperProduct;
  cheaperProducts: CheaperProduct[] = [];
  searchProducts: CheaperProduct[] = [];

  constructor(
    private cheaperProductService: CheaperProductsService
  ) { }

  ngOnInit(): void {
      this.getAllProducts();  
  }

  getAllProducts(): void {
    this.cheaperProductService.getCheaperProducts().subscribe(
      products => this.cheaperProducts = products
    );
  }

  onChange(): void {
    this.cheaperProductService.findProductsByName(this.cheaperProduct.description, this.cheaperProducts).subscribe(
      products => this.searchProducts = products
    );
  }

  clearSearch(): void {
    this.searchProducts = [];
  }

}
