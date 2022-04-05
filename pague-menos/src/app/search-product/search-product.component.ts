import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {

  product = {} as Product;
  products: Product[] = [];
  searchProducts: Product[] = [];

  constructor(
    private prodService: ProductsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts(): void {
    this.prodService.getProducts().subscribe(
      products => this.products = products
    );
  }

  onChange(): void{
    this.prodService.findProductsByName(this.product.name, this.products).subscribe(
      products => this.searchProducts = products
    );
  }

  clearSearch(): void{
    this.searchProducts = [];
  }

  goToNewPurchase(): void{
    console.log('goToNewPurchase');
    this.router.navigate(['/nova-compra']);
  }

}
