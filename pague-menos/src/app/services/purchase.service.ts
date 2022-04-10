import { Injectable } from '@angular/core';
import { Purchase } from '../models/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor() { }


  public returnlowerPrice(purchases: Purchase[] | null | undefined): number {
    let lowerPrice = 0;
    if (purchases) {
      purchases.forEach(purchase => {
        if (purchase.unitPrice < lowerPrice || lowerPrice === 0) {
          lowerPrice = purchase.unitPrice;
        }
      });
      return lowerPrice;}
    else {
      return 0;
    }
  }

  public returnHigherPrice(purchases: Purchase[] | null | undefined): number {
    let higherPrice = 0;
    if (purchases) {
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

}
