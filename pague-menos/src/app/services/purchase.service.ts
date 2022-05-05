import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Purchase } from '../models/purchase';
import { Urls } from '../models/urls';


@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  private readonly url = Urls.baseURL + '/purchase';

  constructor(
    private http: HttpClient
  ) { }

  //headers
  private headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  public returnlowerPrice(purchases: Purchase[] | null | undefined): number {
    let lowerPrice = 0;
    if (purchases && purchases.length > 0) {
      purchases.forEach(purchase => {
        if (purchase.unitPrice < lowerPrice || lowerPrice === 0) {
          lowerPrice = purchase.unitPrice;
        }
      });
    }
    return lowerPrice;
  }

  public returnHigherPrice(purchases: Purchase[] | null | undefined): number {
    let higherPrice = 0;
    if (purchases && purchases.length > 0) {
      purchases.forEach(purchase => {
        if (purchase.unitPrice > higherPrice || higherPrice === 0) {
          higherPrice = purchase.unitPrice;
        }
      });
      return higherPrice;
    }
    else {
      return 0;
    }
  }

  public returnDateOfTheLowestPrice(purchases: Purchase[] | null | undefined): Date | null {
    let dateOfTheLowestPrice: Date | null = null;
    if (purchases && purchases.length > 0) {
      purchases.forEach(purchase => {
        if (purchase.unitPrice === this.returnlowerPrice(purchases)) {
          dateOfTheLowestPrice = purchase.purchaseDate;
        }
      });
    }
    return dateOfTheLowestPrice;
  }

  public returnDateOfTheHighestPrice(purchases: Purchase[] | null | undefined): Date | null {
    let dateOfTheHighestPrice: Date | null = null;
    if (purchases && purchases.length > 0) {
      purchases.forEach(purchase => {
        if (purchase.unitPrice === this.returnHigherPrice(purchases)) {
          dateOfTheHighestPrice = purchase.purchaseDate;
        }
      });
    }
    return dateOfTheHighestPrice;
  }

  // make a post request to purchase
  public postPurchase(purchase: Purchase): Observable<Purchase> {
    // return a subscribe to the post request
    return this.http.post<Purchase>(this.url, purchase, { headers: this.headers });

  } 
}
