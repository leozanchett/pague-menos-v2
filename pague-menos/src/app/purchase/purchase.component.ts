import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { Product } from '../models/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {
  purchaseForm = new FormControl();
  descProds: string[] = [];
  filteredOptions = new Observable<string[]>(); 
  constructor(
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    this.productService.getPromissesProducts().then(products => {
      this.descProds = products.map(product => product.description);
      this.filteredOptions = this.purchaseForm.valueChanges
        .pipe(
          startWith(''),
          map(value => this._filter(value))
        );
      }
    );
}

  private _filter(value: string): string[] {
    console.log('chamouy');
    const filterValue = value.toLowerCase();
    return this.descProds.filter(option => option.toLowerCase().includes(filterValue));
  }
    
  
  

  onSubmit(): void {
    // console.log(this.product);
    // console.log(JSON.stringify(this.product));
    //this.productService.postProduct(this.product);
  }

}
