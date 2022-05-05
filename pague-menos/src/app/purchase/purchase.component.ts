import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Establishment } from '../models/establishment';
import { Product } from '../models/product';
import { Purchase } from '../models/purchase';
import { EstablishmentService } from '../services/establishment.service';
import { ProductsService } from '../services/products.service';
import { PurchaseService } from '../services/purchase.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {
  product = {} as Product;
  purchase = {} as Purchase;
  establishment = {} as Establishment;
  productControl = new FormControl();
  establishmentControl = new FormControl('', Validators.required);
  descProds: string[] = [];
  descEstablishment: string[] = [];
  filteredOptions = new Observable<string[]>();
  filteredEstablishments = new Observable<string[]>();
  constructor(
    private _productService: ProductsService,
    private _establishmentService: EstablishmentService,
    private _purchaseService: PurchaseService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this._productService.getPromissesProducts().then(products => {
      this.descProds = products.map(product => product.description);
      this.filteredOptions = this.productControl.valueChanges
        .pipe(
          startWith(''),
          map(value => {
            this.product.description = value;
            return this._filter(value, this.descProds)
          })
        );
    });
    this._establishmentService.getPromissesEstablishments().then(establishments => {
      this.descEstablishment = establishments.map(establishment => establishment.name);
      this.filteredEstablishments = this.establishmentControl.valueChanges
        .pipe(
          startWith(''),
          map(value => {
            this.establishment.name = value;
            return this._filter(value, this.descEstablishment)
          })
        );
    });
  }

  private _filter(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public calculateTotalPurchase(): void {
    console.log(this.purchase);
    this.purchase.totalPrice = (this.purchase.unitPrice || 0) * (this.purchase.quantity || 0);
  }

  finishPurchase(): void {
    this.purchase.productDescription = this.product.description;
    this.purchase.establishmentDescription = this.establishment.name;
    this.purchase.purchaseDate = new Date();

    console.log(JSON.stringify(this.purchase));
    // purshaseService.postPurchase(this.purchase); with subscribe
    this._purchaseService.postPurchase(this.purchase).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        this.openSnackBar('OPS ' + err.message, 'Fechar');
      },
      complete: () => {
        this.openSnackBar('Compra realizada com sucesso', 'Fechar');
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}




