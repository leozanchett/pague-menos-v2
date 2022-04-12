import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

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
      return higherPrice;}
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

  

}
